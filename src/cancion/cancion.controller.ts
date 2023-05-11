//Importación de librerías, RUTAS, decoradores, incorporando interfaces y clases
//usamos en los metodos un decorador Res de nestjs para devolver una respuesta a las aplicaciones cliente cuando visiten cada ruta
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { json } from 'stream/consumers';

import {CreateCancionDTO} from './dto/cancion.dto';
import { CancionService } from './cancion.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

//adjuntamos un controlador a una etiqueta específica (Canción) con el use el decorador @ApiTags
@ApiTags('Canción')
@Controller('cancion')
export class CancionController {
   
  //instanciamos la clase CancionService en el constructor
  constructor(private cancionService:CancionService){}
   
  //creamos un ruta a traves del metodo POST que nos permita insertar nuevas canciones
    //usamos un parametro Body que nos permite definir el cuerpo del json que nos envia la aplicacion cliente
    //el cuerpo de la peticion que envia el cliente es de tipo CreateCancionDTO (clase), createCancionDTO(instancia de la clase)
    @Post('/create')
    async createPost(@Res() res, @Body() createCancionDTO:CreateCancionDTO){
        const cancion = await this.cancionService.createCancion(createCancionDTO);
        //console.log(createCancionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Canción guardada con éxito!',
            cancion: cancion
        });
    }
//creamos un ruta a traves del metodo GET que nos permita obtener todas las canciones
    @Get('/')
    async getCanciones(@Res() res){
        const canciones = await this.cancionService.getCanciones();
        res.status(HttpStatus.OK).json({
            canciones
        })
    }
  
    //creamos un ruta a traves del metodo GET que nos permita una cancion por su ID
    @ApiParam({
        name:'cancionID'
    })
    @Get('/:cancionID')
    async getCancion(@Res() res, @Param('cancionID') cancionID){
        const cancion = await this.cancionService.getCancion(cancionID);
        //si no recibo/encuentra ninguna cancion, retornamos un error con el NotFoundException
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
 //console.log(createCancionDTO);
        return res.status(HttpStatus.OK).json({
            message:'Canción eliminada con éxito!',
            cancionDeleted
        });
    }
 //creamos un ruta a traves del metodo PUT que nos permita actualizar una cancion por su ID
    //usamos un parametro Body que nos permite definir el cuerpo del json que nos envia la aplicacion cliente para actualizar la cancion
    //el cuerpo de la peticion que envia el cliente es de tipo CreateCancionDTO (clase), createCancionDTO(instancia de la clase)
    //le pasamos el id de la cancion que queremos actualizar a traves del decorador Param

    @ApiParam({
        name:'cancionID'
    })
  
    @Put('/update/:cancionID')
    async updateCancion(@Res() res, @Body() createCancionDTO:CreateCancionDTO, @Param('cancionID')cancionID){
        const cancionUpdate = await this.cancionService.updateCancion(cancionID, createCancionDTO);
  //si no recibo/encuentra ninguna cancion, retornamos un error con el NotFoundException
        if(!cancionUpdate)throw new NotFoundException('La canción no existe');
        return res.status(HttpStatus.OK).json({
            message:'Canción actualizada con éxito!',
            cancionUpdate
        });
    }
}
