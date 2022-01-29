import { modelPet } from '../models/petModel';
import { Request, Response } from 'express';

async function findByTerm (req:Request, res:Response) {
    try {
        const expression = new RegExp(req.params.term)
        const resData = await modelPet.aggregate([
            { $match: { name: expression } }
        ]);
        res.send({ data: resData, error: false });
    } catch (err) {
        console.log(err);
        res.send({ data: null, error: true })
    }
}

async function createPet (req:Request, res:Response) {
    try {
        const matriculePet = await getMatriculePet();
        const petCreated = await modelPet.create({...req.body, matricule: matriculePet });
        res.send({
            data: petCreated,
            error: false
        });
    } catch (err) {
        console.log(err);
        res.send({
            data: null,
            error: true
        })
    }
}

async function getMatriculePet () {
    
    let randomNumber = null;

    while (true) {
        randomNumber = getNumberRandom();
        const resFindMatricule = await modelPet.findOne({ matricule: randomNumber });

        if (!resFindMatricule) {
            break;
        }
    }
    return randomNumber;
}

function getNumberRandom () {
    return Math.floor((Math.random() * (999 - 1 + 1)) + 4);
}

export {
    findByTerm,
    createPet
}