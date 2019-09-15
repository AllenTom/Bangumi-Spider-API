import { Document, model, Schema } from 'mongoose';
const gameSchema = new Schema({



});
export interface Game extends Document {

}

export const gameModel = model<Game>('Game',gameSchema,"Game");
