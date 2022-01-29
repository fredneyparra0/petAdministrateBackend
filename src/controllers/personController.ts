import { Request, Response } from 'express';
import { IPerson } from '../interfaces/personInterface';
import { PET_COLLECTION } from '../models/nameCollections';
import { modelPerson } from '../models/personModel';
import { modelPet } from '../models/petModel';

async function createPerson (req:Request, res:Response) {
    try {
        const data:IPerson = req.body;
        const numberDocumentExist = await modelPerson.findOne({ numberDocument: req.body.numberDocument });
        if (!numberDocumentExist) {
            const personCrated = await modelPerson.create(data);
            res.send({
                data: personCrated,
                error: false
            });
        } else {
            res.send({
                data: null,
                error: true,
                message: "Number Document exist"
            });
        }
    } catch (err) {
        console.log(err);
        res.send({
            data: null,
            error: true
        })
    }
}

async function findAll (req:Request, res:Response) {
    try {
        const persons = await modelPerson.find({}).populate('pets');
        res.send({
            data: persons,
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

async function deletePersonById (req:Request, res:Response) {
    try {
        const personDeleted = await modelPerson.findByIdAndDelete({ _id: req.params.id });
        res.send({
            data: personDeleted,
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

async function findById (req:Request, res:Response) {
    try {
        const findPerson = await modelPerson.findById(req.params.id).populate('pets');
        res.send({
            data: findPerson,
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

async function findByIdAndUpadte (req:Request, res:Response) {
    try {
        const personUpdated = await modelPerson.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({
            data: personUpdated,
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

async function filterPerson (req:Request, res:Response) {
    try {
        const expression = new RegExp(req.params.term, "i")
        const resFilter = await modelPerson.aggregate([
            { $match: { name: expression } }
        ]);
        res.send({
            data: resFilter,
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

export {
    createPerson,
    findAll,
    deletePersonById,
    findById,
    findByIdAndUpadte,
    filterPerson
}