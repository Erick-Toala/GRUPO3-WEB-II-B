import { Schema } from 'mongoose';


export const AlbumSchema = new Schema({
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
