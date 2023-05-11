//importamos Schema desde mongoose
import { Schema } from 'mongoose';

//modelamos los datos que vamos a guardar dentro de mongoose en un Schema
export const AutorSchema = new Schema({
    
    //definimos todas las propiedades que vamos a guardar en mongodb
  
    nombre:{
        type:String,
        required:true
    },
    nacionalidad:String,
    fechaNacimiento:{
        type:Date,
        default:Date.now
    },
    urlFoto:String,
    urlYouTube:String
});