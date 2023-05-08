import { Module } from '@nestjs/common';
import { CancionController } from './cancion.controller';
import { CancionService } from './cancion.service';

import { MongooseModule } from '@nestjs/mongoose';


@Module({
  controllers: [CancionController],
  providers: [CancionService]
})
export class CancionModule {}
