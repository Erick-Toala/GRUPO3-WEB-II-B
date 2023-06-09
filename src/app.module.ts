import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//importamos los modulos necesarios
import { MongooseModule } from '@nestjs/mongoose';
import { AutorModule } from './autor/autor.module';
import { AlbumModule } from './album/album.module';

@Module({
  //el modulo de mongoose usa un metodo (forRoot), que recibe un parametro (cadena de conexion de mongodb) 
  imports: [CancionModule, MongooseModule.forRoot('mongodb+srv://toalaerick56:toalaerick56@cluster0.9flgjye.mongodb.net/music-repertorio-80s'), AutorModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
