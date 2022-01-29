import { connect } from 'mongoose';

export async function makeDb () {
    try {
        await connect(process.env.URI || 'mongodb://localhost/petsManagment');
        console.log('Database is connected succesfull');
    } catch (err) {
        console.log('NEW ERROR TO CONNECT DATABASE ==> ', err);
    }
}