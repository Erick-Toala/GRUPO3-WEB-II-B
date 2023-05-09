import { ApiProperty } from "@nestjs/swagger";
import { CreateCancionDTO } from "src/cancion/dto/cancion.dto";

export class CreateAlbumDTO{
    @ApiProperty()readonly nombre:string;
    @ApiProperty()readonly disquera:string;
    @ApiProperty()readonly numCanciones:number;
    @ApiProperty()readonly cancionPopular:string;
    @ApiProperty()readonly idArtista:string;
    @ApiProperty()readonly idCanciones:Array<CreateCancionDTO>;
    @ApiProperty()readonly urlAlbum:string;
    @ApiProperty()readonly fechaLanzamiento:Date;
}
