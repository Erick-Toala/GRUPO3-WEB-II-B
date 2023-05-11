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

     //creamos un ruta a traves del metodo POST que nos permita insertar nuevos autores
    @Post('/create')
    async createPost(@Res() res, @Body() createAutorDTO:CreateAutorDTO){
        const autor = await this.autorService.createAutor(createAutorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Autor guardado con éxito!',
            autor
        })
    }
//creamos un ruta a traves del metodo GET que nos permita obtener todos los autores
    @Get('/')
    async getAutores(@Res() res){
        const autores = await this.autorService.getAutores();
        res.status(HttpStatus.OK).json({
            autores
        })
    }
  //creamos un ruta a traves del metodo GET que nos permita obtener un autor por su ID
      @ApiParam({
        name:'autorID'
    })
    @Get('/:autorID')
    async getCancion(@Res() res, @Param('autorID') autorID){
        const autor = await this.autorService.getAutor(autorID);
       
        //si no recibo/encuentra ningun autor retornamos un error con el NotFoundException
             if(!autor)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json(autor);
    }

    //creamos un ruta a traves del metodo DELETE que nos permita eliminar un autor por su ID
    @ApiParam({
        name:'autorID'
    })
    @Delete('/delete/:autorID')
    async deleteAutor(@Res() res, @Param('autorID') autorID){
        const autorDeleted = await this.autorService.deleteAutor(autorID);
        //si no recibo/encuentra ningun autor retornamos un error con el NotFoundException
        if(!autorDeleted)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json({
            message:'Autor eliminada con éxito!',
            autorDeleted
        });
    }

    //creamos un ruta a traves del metodo PUT que nos permita actualizar un autor por su ID
    @ApiParam({
        name:'autorID'
    })
    @Put('/update/:autorID')
    async updateAutor(@Res() res, @Body() createAutorDTO:CreateAutorDTO, @Param('autorID')autorID){
        const actorUpdate = await this.autorService.updateAutor(autorID, createAutorDTO);
        //si no recibo/encuentra ningun autor retornamos un error con el NotFoundException
        if(!actorUpdate)throw new NotFoundException('El autor no existe');
        return res.status(HttpStatus.OK).json({
            message:'Autor actualizada con éxito!',
            actorUpdate
        });
    }
}
