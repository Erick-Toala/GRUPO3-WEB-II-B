import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import {CreateAutorDTO} from './dto/autor.dto';
import {AutorService} from './autor.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';


@ApiTags('Artista')

@Controller('autor')

export class AutorController {

    constructor(private autorService: AutorService){}
    @Post('/create')
    async createPost(@Res() res, @Body() createAutorDTO:CreateAutorDTO){
        const autor = await this.autorService.createAutor(createAutorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Autor guardado con éxito!',
            autor
        })
    }

    @Get('/')
    async getAutores(@Res() res){
        const autores = await this.autorService.getAutores();
        res.status(HttpStatus.OK).json({
            autores
        })
    }

    
    
}
