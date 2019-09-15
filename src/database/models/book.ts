import { Document, model, Schema } from 'mongoose';
const bookSchema = new Schema({



});
export interface Book extends Document {

}

export const bookModel = model<Book>('Book',bookSchema,"Book");
