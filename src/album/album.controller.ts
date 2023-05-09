import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateAlbumDTO} from './dto/album.dto';
import { AlbumService } from './album.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Álbum')
@Controller('album')

