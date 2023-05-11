//Importación de librerías, modelos, modulos incorporando interfaces y clases
import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Album } from './interfaces/album.interface';
import { CreateAlbumDTO } from './dto/album.dto';

@Injectable()
export class AlbumService {
    //llamamos al constructor para injectar el modelo Album dentro de la clase
    constructor(@InjectModel('Album') private readonly albumModel:Model<Album>){}
        
    //Método GET para obtener datos de todos las albumes guardadas en mongodb
    async getAlbumes(): Promise<Album[]> {
        const albumes = await this.albumModel.find().populate('cancionPopular idArtista', 'nombre').populate('idCanciones','nombre').exec();
        return albumes;
    }
    //Método GET para obtener datos de un album por su ID guardada en mongodb
    async getAlbum(albumID:string):Promise<Album>{
        const album = await this.albumModel.findById(albumID).populate('idArtista', 'nombre').exec();;
        return album;
    }
    //Método CREATE para crear un nuevo album en mongodb
    async createAlbum(createAlbumDTO:CreateAlbumDTO):Promise<Album>{
        const album = new this.albumModel(createAlbumDTO);
        return await album.save();
    }
    //Método DELETE para eliminar un album por su ID de mongodb
    async deleteAlbum(albumID:string):Promise<Album>{
        const deleteAlbum = await this.albumModel.findByIdAndDelete(albumID);
        return deleteAlbum;
    }
    //Método UPDATE para modificar los datos de un album por su ID en mongodb
    async updateAlbum(albumID:string, createAlbumDTO:CreateAlbumDTO):Promise<Album>{
        const updateAlbum = await this.albumModel.findByIdAndUpdate(albumID, createAlbumDTO, {new:true});
        return updateAlbum;
    }

}
