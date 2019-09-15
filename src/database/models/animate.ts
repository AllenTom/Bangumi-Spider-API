import { Document, model, Schema } from 'mongoose';
const animateSchema = new Schema({



});
export interface Animate extends Document {

}

export const animateModel = model<Animate>('Animate',animateSchema,"Animate");
