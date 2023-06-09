import { Module } from '@nestjs/common';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';

//importamos el modulo de mongoose y el schema de la entidad autor
import {MongooseModule} from '@nestjs/mongoose';
import {AutorSchema} from './schemas/autor.schema';

@Module({

  imports:[

  //definimos un nuevo Schema en mongoose para la entidad Autor basada en el schema AutorSchema
    MongooseModule.forFeature([
      {name:'Autor',schema:AutorSchema}
    ])
  ],
  controllers: [AutorController],
  providers: [AutorService]
})


export class AutorModule {}
