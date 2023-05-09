//Importación de librerías, modelos, modulos incorporando interfaces y clases
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDTO } from './dto/cancion.dto';

@Injectable()
export class CancionService {

  //llamamos al constructor para injectar el modelo Cancion dentro de la clase
  constructor(@InjectModel('Cancion') private readonly cancionModel:Model<Cancion>){}

    //Método GET para obtener datos de todas las canciones guardadas en mongodb
    async getCanciones(): Promise<Cancion[]> {
        const canciones = await this.cancionModel.find().populate('idArtista', 'nombre').populate('idAlbum', 'nombre').exec();
        return canciones;
    }

    //Método GET para obtener datos de una canción por su ID guardada en mongodb
    async getCancion(cancionID:string):Promise<Cancion>{
        const cancion = await this.cancionModel.findById(cancionID).populate('idArtista', 'nombre').populate('idAlbum', 'nombre').exec();;
        return cancion;
    }
  
    async createCancion(createCancionDTO:CreateCancionDTO):Promise<Cancion>{
        const cancion = new this.cancionModel(createCancionDTO);
        return await cancion.save();
    }
  
    async deleteCancion(cancionID:string):Promise<Cancion>{
        const deleteCancion = await this.cancionModel.findByIdAndDelete(cancionID);
        return deleteCancion;
    }

    async updateCancion(cancionID:string, createCancionDTO:CreateCancionDTO):Promise<Cancion>{
        const updateCancion = await this.cancionModel.findByIdAndUpdate(cancionID, createCancionDTO, {new:true});
        return updateCancion;
    }
}
