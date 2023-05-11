
//Importación de librerías, modelos, modulos incorporando interfaces y clases

import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Autor} from './interfaces/autor.interface';
import {CreateAutorDTO} from './dto/autor.dto';


@Injectable()
export class AutorService {

     //llamamos al constructor para injectar el modelo Autor dentro de la clase
    constructor(@InjectModel('Autor') private readonly autorModel:Model<Autor>){}
 
 
    //Método GET para obtener datos de todos los autores guardadas en mongodb
    async getAutores(): Promise<Autor[]> {
        const autores = await this.autorModel.find()
        return autores;
    }

    //Método GET para obtener datos de todos los autores guardadas en mongodb
    async getAutor(autorID:string):Promise<Autor>{
        const autor = await this.autorModel.findById(autorID);
        return autor;
    }

    //Método CREATE para crear un nuevo autor en mongodb
    async createAutor(createAutorDTO:CreateAutorDTO):Promise<Autor>{
        const autor = new this.autorModel(createAutorDTO);
        return await autor.save();
    }


    //Método DELETE para eliminar un autor por su ID de mongodb
    async deleteAutor(autorID:string):Promise<Autor>{
        const deleteAutor = await this.autorModel.findByIdAndDelete(autorID);
        return deleteAutor;
    }


    //Método UPDATE para modificar los datos de un autor por su ID en mongodb
    async updateAutor(autorID:string, createAutorDTO:CreateAutorDTO):Promise<Autor>{
        const updateAutor = await this.autorModel.findByIdAndUpdate(autorID, createAutorDTO, {new:true});
        return updateAutor;
    }


}
