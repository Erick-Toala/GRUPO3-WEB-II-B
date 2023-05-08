import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { json } from 'stream/consumers';
import {CreateCancionDTO} from './dto/cancion.dto';
import { CancionService } from './cancion.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

export class CancionController {
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

}
