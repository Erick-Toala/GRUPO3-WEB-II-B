import { ApiProperty } from "@nestjs/swagger";


//Se realiza la creación de la clase y se le agrega "export" para enviar los datos de tal forma que sea Servidor--Cliente

export class CreateAutorDTO{


    //definimos las propiedades de la entidad que se van a recibir del cliente, @ApiProperty() se usa para el Swagger


    @ApiProperty()readonly nombre:string;
    @ApiProperty()readonly nacionalidad:string;
    @ApiProperty()readonly fechaNacimiento:Date;
    @ApiProperty()readonly urlFoto:string;
    @ApiProperty()readonly urlYouTube:string;   
}