import { Router } from 'express';
import { createPet, findByTerm } from '../controllers/petsController';

export const routerPet:Router = Router();

routerPet.post('', createPet);

routerPet.get('/petByTerm/:term', findByTerm);
