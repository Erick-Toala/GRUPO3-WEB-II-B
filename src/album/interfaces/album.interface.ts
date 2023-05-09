import {Document} from 'mongoose';
import { CreateCancionDTO } from 'src/cancion/dto/cancion.dto';

export interface Album extends Document{
    readonly nombre:string;
    readonly disquera:string;
    readonly numCanciones:number;
    readonly cancionPopular:string;
    readonly idArtista:string;
    readonly idCanciones:Array<CreateCancionDTO>;
    readonly urlAlbum:string;
    readonly fechaLanzamiento:Date;
}
