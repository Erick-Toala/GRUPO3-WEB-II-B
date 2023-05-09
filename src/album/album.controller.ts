import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateAlbumDTO} from './dto/album.dto';
import { AlbumService } from './album.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Álbum')
@Controller('album')

export class AlbumController {

    constructor(private albumService:AlbumService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createAlbumDTO:CreateAlbumDTO){
        const album = await this.albumService.createAlbum(createAlbumDTO);
        //console.log(createCancionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Álbum guardada con éxito!',
            album: album
        });
    }

    @Get('/')
    async getAlbumes(@Res() res){
        const albumes = await this.albumService.getAlbumes();
        res.status(HttpStatus.OK).json({
            albumes
        })
    }

    @ApiParam({
        name:'albumID'
    })
    @Get('/:albumID')
    async getAlbum(@Res() res, @Param('albumID') albumID){
        const album = await this.albumService.getAlbum(albumID);
        if(!album)throw new NotFoundException('La álbum no existe');
        return res.status(HttpStatus.OK).json(album);
    }

    @ApiParam({
        name:'albumID'
    })
    @Delete('/delete')
    async deleteAlbum(@Res() res, @Query('albumID') albumID){
        const albumDeleted = await this.albumService.deleteAlbum(albumID);
        if(!albumDeleted)throw new NotFoundException('El álbum  no existe');
        return res.status(HttpStatus.OK).json({
            message:'Álbum eliminada con éxito!',
            albumDeleted
        });
    }

    @ApiParam({
        name:'albumID'
    })
    @Put('/update')
    async updateAlbum(@Res() res, @Body() createAlbumDTO:CreateAlbumDTO, @Query('albumID')albumID){
        const albumUpdate = await this.albumService.updateAlbum(albumID, createAlbumDTO);
        if(!albumUpdate)throw new NotFoundException('El álbum  no existe');
        return res.status(HttpStatus.OK).json({
            message:'Álbum actualizada con éxito!',
            albumUpdate
        });
    }
}
