import { ApiProperty } from "@nestjs/swagger";
import { CreateCancionDTO } from "src/cancion/dto/cancion.dto";
//Se realiza la creación de la clase y se le agrega "export" para enviar los datos de tal forma que sea Servidor--Cliente
export class CreateAlbumDTO{
//definimos las propiedades de la entidad que se van a recibir del cliente, @ApiProperty() se usa para el Swagger
    @ApiProperty()readonly nombre:string;
    @ApiProperty()readonly disquera:string;
    @ApiProperty()readonly numCanciones:number;
    @ApiProperty()readonly cancionPopular:string;
    @ApiProperty()readonly idArtista:string;
    @ApiProperty()readonly idCanciones:Array<CreateCancionDTO>;
    @ApiProperty()readonly urlAlbum:string;
    @ApiProperty()readonly fechaLanzamiento:Date;
}
