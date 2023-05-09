import { Schema } from 'mongoose';


export const AlbumSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
});