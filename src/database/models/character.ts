import { Document, model, Schema } from 'mongoose';
const characterSchema = new Schema({



});
export interface Character extends Document {

}

export const characterModel = model<Character>('Character',characterSchema,"Character");
