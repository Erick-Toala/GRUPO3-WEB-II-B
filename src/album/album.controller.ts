///Importación de librerías, RUTAS, decoradores, incorporando interfaces y clases
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateAlbumDTO} from './dto/album.dto';
import { AlbumService } from './album.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
//adjuntamos un controlador a una etiqueta específica (Álbum) con el use el decorador @ApiTags
@ApiTags('Álbum')
@Controller('album')

export class AlbumController {
    //instanciamos la clase AlbumService en el constructor
    constructor(private albumService:AlbumService){}

    //creamos un ruta a traves del metodo POST que nos permita insertar nuevos albumes
    @Post('/create')
    async createPost(@Res() res, @Body() createAlbumDTO:CreateAlbumDTO){
        const album = await this.albumService.createAlbum(createAlbumDTO);
        //console.log(createCancionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Álbum guardada con éxito!',
            album: album
        });
    }
    //creamos un ruta a traves del metodo GET que nos permita obtener todos albumes
    @Get('/')
    async getAlbumes(@Res() res){
        const albumes = await this.albumService.getAlbumes();
        res.status(HttpStatus.OK).json({
            albumes
        })
    }
    //creamos un ruta a traves del metodo GET que nos permita obtener un album por su ID
    @ApiParam({
        name:'albumID'
    })
    @Get('/:albumID')
    async getAlbum(@Res() res, @Param('albumID') albumID){
        const album = await this.albumService.getAlbum(albumID);
        if(!album)throw new NotFoundException('La álbum no existe');
        //si no recibo/encuentra ningun album retornamos un error con el NotFoundException
        return res.status(HttpStatus.OK).json(album);
    }
    
    //creamos un ruta a traves del metodo DELETE que nos permita eliminar un album por su ID
    @ApiParam({
        name:'albumID'
    })
    @Delete('/delete/:albumID')
    async deleteAlbum(@Res() res, @Param('albumID') albumID){
        const albumDeleted = await this.albumService.deleteAlbum(albumID);
        if(!albumDeleted)throw new NotFoundException('El álbum  no existe');
        //si no recibo/encuentra ningun album retornamos un error con el NotFoundException
        return res.status(HttpStatus.OK).json({
            message:'Álbum eliminada con éxito!',
            albumDeleted
        });
    }

    //creamos un ruta a traves del metodo PUT que nos permita actualizar un album por su ID
    @ApiParam({
        name:'albumID'
    })
    @Put('/update/:albumID')
    async updateAlbum(@Res() res, @Body() createAlbumDTO:CreateAlbumDTO, @Param('albumID')albumID){
        const albumUpdate = await this.albumService.updateAlbum(albumID, createAlbumDTO);
        //si no recibo/encuentra ningun album retornamos un error con el NotFoundException
        if(!albumUpdate)throw new NotFoundException('El álbum  no existe');
        return res.status(HttpStatus.OK).json({
            message:'Álbum actualizada con éxito!',
            albumUpdate
        });
    }
}
