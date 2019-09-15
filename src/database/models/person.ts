import { Document, model, Schema } from 'mongoose';
const personSchema = new Schema({



});
export interface Person extends Document {

}

export const personModel = model<Person>('Person',personSchema,"Person");
