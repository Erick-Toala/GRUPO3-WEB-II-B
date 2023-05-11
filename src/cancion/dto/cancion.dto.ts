import { ApiProperty } from "@nestjs/swagger";

//Data transfer object
//Se realiza la creación de la clase y se le agrega "export" para enviar los datos de tal forma que sea Servidor--Cliente
export class CreateCancionDTO{

    //definimos las propiedades de la entidad que se van a recibir del cliente, @ApiProperty() se usa para el Swagger
    //Para que las propiedades de la clase sean visibles para el SwaggerModule, tenemos que anotarlas con el decorador @ApiProperty()
    @ApiProperty()readonly nombre:string;
    @ApiProperty()readonly duracion:string;
    @ApiProperty()readonly idArtista:string;
    @ApiProperty()readonly idAlbum:string;
    @ApiProperty()readonly urlPortada:string;
    @ApiProperty()readonly urlYouTube:string;
    @ApiProperty()readonly fechaLanzamiento:Date;
}
