import { IPet } from './petInterface';

export interface IPerson {
    name: string;
    pets: [IPet];
    numberDocument: string;
}