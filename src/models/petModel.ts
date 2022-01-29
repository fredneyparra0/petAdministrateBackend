import { model, Schema, Model } from 'mongoose';
import { PET_COLLECTION } from './nameCollections';

const SchemaPet:Schema<any> = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        required: true
    }
});

export const modelPet:Model<any> = model(PET_COLLECTION, SchemaPet);