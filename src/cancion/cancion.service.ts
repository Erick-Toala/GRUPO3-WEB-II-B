//Importación de librerías, modelos, modulos incorporando interfaces y clases
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDTO } from './dto/cancion.dto';

@Injectable()
export class CancionService {

  //llamamos al constructor para injectar el modelo Cancion dentro de la clase
    //es de tipo Model (que es el modelo de mongoose que hemos importado)
    //y se va a basar en el tipo de dato llamado Cancion (que es nuestra interface importada)
  constructor(@InjectModel('Cancion') private readonly cancionModel:Model<Cancion>){}

   //Método GET para obtener datos de todas las canciones guardadas en mongodb
    //devuelve a traves de una promesa un arreglo de canciones (Cancion[])
    //cancionModel es la conexion de mongodb, aqui nosotros podemos consultar, guardar, modificar o eliminar datos
    async getCanciones(): Promise<Cancion[]> {
        const canciones = await this.cancionModel.find().populate('idArtista', 'nombre').populate('idAlbum', 'nombre').exec();
        return canciones;
    }

    //Método GET para obtener datos de una canción por su ID guardada en mongodb
    async getCancion(cancionID:string):Promise<Cancion>{
        const cancion = await this.cancionModel.findById(cancionID).populate('idArtista', 'nombre').populate('idAlbum', 'nombre').exec();;
        return cancion;
    }
     //Método CREATE para crear una nueva canción en mongodb
    //devuelve a traves de una promesa una nueva cancion creada (Cancion)
    //y lo que vamos a recibir como parametros de esta funcion es los datos de la nueva cancion
    //basado en la clase CreateCancionDTO 
    //lo que le estamos diciendo estoy creando una nueva cancion basado en los datos que te voy a dar en esta funcion
  
    async createCancion(createCancionDTO:CreateCancionDTO):Promise<Cancion>{
        const cancion = new this.cancionModel(createCancionDTO);
        return await cancion.save();
    }
  
    async deleteCancion(cancionID:string):Promise<Cancion>{
        const deleteCancion = await this.cancionModel.findByIdAndDelete(cancionID);
        return deleteCancion;
    }
    
    //Método UPDATE para modificar los datos de una canción por su ID en mongodb
    //devuelve a traves de una promesa, la cancion modificada (Cancion)
    //y lo que vamos a recibir como parametros en esta funcion es primero el ID de la cancion
    //y los nuevos datos de la cancion que quiero actualizar
    //basado en la clase CreateCancionDTO
    //le damos la propiedad {new:true} a esta consulta para que nos devuelva el objeto nuevo que hemos de actualizado

    async updateCancion(cancionID:string, createCancionDTO:CreateCancionDTO):Promise<Cancion>{
        const updateCancion = await this.cancionModel.findByIdAndUpdate(cancionID, createCancionDTO, {new:true});
        return updateCancion;
    }
}
