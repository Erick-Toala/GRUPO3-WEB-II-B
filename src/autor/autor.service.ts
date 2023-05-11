import { Injectable } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Autor} from './interfaces/autor.interface';
import {CreateAutorDTO} from './dto/autor.dto';

@Injectable()
export class AutorService {
    constructor(@InjectModel('Autor') private readonly autorModel:Model<Autor>){}


    async getAutores(): Promise<Autor[]> {
        const autores = await this.autorModel.find()
        return autores;
    }

   

}
