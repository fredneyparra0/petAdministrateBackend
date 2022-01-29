import { Schema, model, Model } from 'mongoose';
import { IPerson } from '../interfaces/personInterface';
import { PERSON_COLLECTION } from './nameCollections';

const SchemaPerson:Schema<IPerson> = new Schema({
    name: {
        type: String,
        required: true
    },
    numberDocument: {
        type: String,
        require: true,
        unique: true
    },
    pets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'pet'
        }
    ]
});

export const modelPerson:Model<any> = model(PERSON_COLLECTION, SchemaPerson);