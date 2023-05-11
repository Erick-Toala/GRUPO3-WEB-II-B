import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

//importamos el modulo de mongoose y el schema de la entidad album
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema } from './schemas/album.schema';

@Module({
  imports:[
    //definimos un nuevo Schema en mongoose para la entidad Album basada en el schema AlbumSchema
    MongooseModule.forFeature([
      {name:'Album', schema: AlbumSchema }
    ])
  ],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule {}
