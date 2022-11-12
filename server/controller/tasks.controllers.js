import {pool} from '../config/conexion.js';

export const createCandidate = (req, res) => {

    try{
        pool.query('');
        res.send('Registro completo');
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}