import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateAutorDTO} from './dto/autor.dto';

import {AutorService} from './autor.service';

import { ApiParam, ApiTags } from '@nestjs/swagger';



@ApiTags('artista')

@Controller('autor')

export class AutorController {

    constructor(private autorService: AutorService){


    }

    
}
