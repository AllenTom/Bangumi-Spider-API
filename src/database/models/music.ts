import { Document, model, Schema } from 'mongoose';
const musicSchema = new Schema({



});
export interface Music extends Document {

}

export const musicModel = model<Music>('Music',musicSchema,"Music");
