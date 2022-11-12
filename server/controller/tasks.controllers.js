import {pool} from '../config/conexion.js';

export const createCandidate = async (req, res) => {

    try {
        const {document, } = req.body;
        const [result] = await pool.query(
            "INSERT INTO acudiente (idAcudiente, Nombre, Telefono) VALUES (?, NULL, NULL)",
            [document]
        );
        res.json({
            id: result.insertId,
            document
        });
    } catch (error) {
        console.log(error);
    }
    
}