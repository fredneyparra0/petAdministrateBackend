import { Router } from 'express';
import { createPerson, findAll, deletePersonById, findById, findByIdAndUpadte } from '../controllers/personController';

export const routerPerson:Router = Router();

routerPerson.post('/create', createPerson);

routerPerson.get('/getAll', findAll);

routerPerson.get('/get/:id', findById);

routerPerson.put('/update/:id', findByIdAndUpadte);

routerPerson.delete('/delete/:id', deletePersonById);

