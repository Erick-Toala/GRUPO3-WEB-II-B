import { ApiProperty } from "@nestjs/swagger";

export class CreateAutorDTO{
    @ApiProperty()readonly nombre:string;
    @ApiProperty()readonly nacionalidad:string;
    @ApiProperty()readonly fechaNacimiento:Date;
    @ApiProperty()readonly urlFoto:string;
    @ApiProperty()readonly urlYouTube:string;   
}