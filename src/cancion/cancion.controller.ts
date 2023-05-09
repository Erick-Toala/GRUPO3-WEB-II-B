//Importación de librerías, RUTAS, decoradores, incorporando interfaces y clases
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { json } from 'stream/consumers';

import {CreateCancionDTO} from './dto/cancion.dto';
import { CancionService } from './cancion.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Canción')
@Controller('cancion')
export class CancionController {
   
  //instanciamos la clase CancionService en el constructor
  constructor(private cancionService:CancionService){}
    
    @Post('/create')
    async createPost(@Res() res, @Body() createCancionDTO:CreateCancionDTO){
        const cancion = await this.cancionService.createCancion(createCancionDTO);
        //console.log(createCancionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Canción guardada con éxito!',
            cancion: cancion
        });
    }

    @Get('/')
    async getCanciones(@Res() res){
        const canciones = await this.cancionService.getCanciones();
        res.status(HttpStatus.OK).json({
            canciones
        })
    }
  
    @ApiParam({
        name:'cancionID'
    })
    @Get('/:cancionID')
    async getCancion(@Res() res, @Param('cancionID') cancionID){
        const cancion = await this.cancionService.getCancion(cancionID);
        if(!cancion)throw new NotFoundException('La canción no existe');
        return res.status(HttpStatus.OK).json(cancion);
    }

    @ApiParam({
        name:'cancionID'
    })
    @Delete('/delete/:cancionID')
    async deleteCancion(@Res() res, @Param('cancionID') cancionID){
        const cancionDeleted = await this.cancionService.deleteCancion(cancionID);
        if(!cancionDeleted)throw new NotFoundException('La canción no existe');
        return res.status(HttpStatus.OK).json({
            message:'Canción eliminada con éxito!',
            cancionDeleted
        });
    }

    @ApiParam({
        name:'cancionID'
    })
  
    @Put('/update/:cancionID')
    async updateCancion(@Res() res, @Body() createCancionDTO:CreateCancionDTO, @Param('cancionID')cancionID){
        const cancionUpdate = await this.cancionService.updateCancion(cancionID, createCancionDTO);
        if(!cancionUpdate)throw new NotFoundException('La canción no existe');
        return res.status(HttpStatus.OK).json({
            message:'Canción actualizada con éxito!',
            cancionUpdate
        });
    }
}
