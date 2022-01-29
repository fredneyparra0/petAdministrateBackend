import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { routerPerson } from './routes/person';
import { makeDb } from './config/dbConnection';
import { routerPet } from './routes/pets';

const app:Express = express();
const PORT: string | number = process.env.PORT || 3100;

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(cors());

app.use('/api/person', routerPerson);
app.use('/api/pet', routerPet); 

makeDb()

app.listen(PORT,() => {
    console.log(`Server running in https://localhost:${PORT}`);
});
