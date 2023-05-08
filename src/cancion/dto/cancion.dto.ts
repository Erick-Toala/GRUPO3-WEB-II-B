import { ApiProperty } from "@nestjs/swagger";
export class CreateCancionDTO{

    @ApiProperty()readonly nombre:string;
    @ApiProperty()readonly duracion:string;
    @ApiProperty()readonly idArtista:string;
    @ApiProperty()readonly idAlbum:string;
    @ApiProperty()readonly urlPortada:string;
    @ApiProperty()readonly urlYouTube:string;
    @ApiProperty()readonly fechaLanzamiento:Date;
}
