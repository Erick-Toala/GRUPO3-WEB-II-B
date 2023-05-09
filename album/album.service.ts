import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Album } from './interfaces/album.interface';
import { CreateAlbumDTO } from './dto/album.dto';

@Injectable()
