import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDTO } from './dto/cancion.dto';
@Injectable()
export class CancionService {
  constructor(@InjectModel('Cancion') private readonly cancionModel:Model<Cancion>){}

    async getCanciones(): Promise<Cancion[]> {
        const canciones = await this.cancionModel.find().populate('idArtista', 'nombre').populate('idAlbum', 'nombre').exec();
        return canciones;
    }

    async getCancion(cancionID:string):Promise<Cancion>{
        const cancion = await this.cancionModel.findById(cancionID).populate('idArtista', 'nombre').populate('idAlbum', 'nombre').exec();;
        return cancion;
    }
}
