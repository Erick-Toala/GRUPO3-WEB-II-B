import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDTO } from './dto/cancion.dto';
@Injectable()
export class CancionService {
}
