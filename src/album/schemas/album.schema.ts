//importamos Schema desde mongoose
import { Schema } from 'mongoose';

//modelamos los datos que vamos a guardar dentro de mongoose en un Schema
export const AlbumSchema = new Schema({
    //definimos todas las propiedades que vamos a guardar en mongodb
    nombre:{
        type:String,
        required:true
    },
    disquera:String,
    numCanciones:Number,
    cancionPopular:{type: Schema.Types.ObjectId, ref:"Cancion"},
    idArtista:{type: Schema.Types.ObjectId, ref:"Autor"},
    idCanciones:[{ type: Schema.Types.ObjectId, ref:"Cancion"}],
    urlAlbum:String,
    fechaLanzamiento:{
        type:Date,
        default:Date.now
    }
});
