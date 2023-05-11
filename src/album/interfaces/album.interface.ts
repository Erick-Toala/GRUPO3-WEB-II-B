//importamos el objeto Document para manejar la interface como un documento
import {Document} from 'mongoose';
import { CreateCancionDTO } from 'src/cancion/dto/cancion.dto';
//definimos una interface para detallar que es lo que vamos a estar manejando dentro del codigo
export interface Album extends Document{
    //definimos las propiedades
    readonly nombre:string;
    readonly disquera:string;
    readonly numCanciones:number;
    readonly cancionPopular:string;
    readonly idArtista:string;
    readonly idCanciones:Array<CreateCancionDTO>;
    readonly urlAlbum:string;
    readonly fechaLanzamiento:Date;
}
