import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//inicialice Swagger usando la SwaggerModule clase
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //DocumentBuildera estructurar un documento base que se ajuste a la especificación OpenAPI
  const config = new DocumentBuilder()

//establecer propiedades tales como título, descripción, versión, etc
    .setTitle('MUSIC API')
    .setDescription('Aplicación de repertorio para música de los 80s')
    .setVersion('1.0')
    .build();

//crear un documento completo (con todas las rutas HTTP definidas)
  //Este método toma dos argumentos, una instancia de aplicación y un objeto de opciones de Swagger
  const document = SwaggerModule.createDocument(app, config);

//llamamos al setup(), que acepta: La ruta para montar la interfaz de usuario de Swagger,
  //una instancia de aplicación y el objeto de documento instanciado anteriormente.
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(5000);
}
bootstrap();
