//Importación de librerías, RUTAS, decoradores, incorporando interfaces y clases

import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateAutorDTO} from './dto/autor.dto';
import {AutorService} from './autor.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

//adjuntamos un controlador a una etiqueta específica (Artista) con el use el decorador @ApiTags
@ApiTags('Artista')
@Controller('autor')
export class AutorController {

    
    //instanciamos la clase AutorService en el constructor
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

    @ApiParam({
        name:'autorID'
    })
    @Get('/:autorID')
    async getCancion(@Res() res, @Param('autorID') autorID){
        const autor = await this.autorService.getAutor(autorID);
        if(!autor)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json(autor);
    }
 
    @ApiParam({
        name:'autorID'
    })
    @Delete('/delete')
    async deleteAutor(@Res() res, @Query('autorID') autorID){
        const autorDeleted = await this.autorService.deleteAutor(autorID);
        if(!autorDeleted)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json({
            message:'Autor eliminada con éxito!',
            autorDeleted
        });
    }

    @ApiParam({
        name:'autorID'
    })
    @Put('/update')
    async updateAutor(@Res() res, @Body() createAutorDTO:CreateAutorDTO, @Query('autorID')autorID){
        const actorUpdate = await this.autorService.updateAutor(autorID, createAutorDTO);
        if(!actorUpdate)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json({
            message:'Autor actualizada con éxito!',
            actorUpdate
        });
    }
   
}
