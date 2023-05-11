//importamos el objeto Document para manejar la interface como un documento
import {Document} from 'mongoose';


//definimos una interface para detallar que es lo que vamos a estar manejando dentro del codigo
export interface Autor extends Document{

   //definimos las propiedades
    readonly nombre:string;
    readonly nacionalidad:string;
    readonly fechaNacimiento:Date;
    readonly urlFoto:string;
    readonly urlYouTube:string;   
}