import { Router } from 'express';
import { createPerson, findAll, deletePersonById } from '../controllers/personController';
import { createPet, findByTerm } from '../controllers/petsController';



export const router:Router = Router();

router.post('/person', createPerson);

router.get('/person', findAll);

router.delete('/person/:id', deletePersonById);

router.post('/pet', createPet);

router.get('/petByTerm/:term', findByTerm);
