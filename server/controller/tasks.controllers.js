import {pool} from '../config/conexion.js';

export const createCandidate = async (req, res) => {

    try {
        const {document,name,genderBox,Date,maritalStatus,sons,currentJob,stratum,otherGender,partner } = req.body;
        const [result] = await pool.query(
            "INSERT INTO `aspirantes` (`id_Aspirante`, `Documento`, `Nombre`, `id_sexo`, `FechaNacimiento`, `Estado_id_estado`, `Hijos`, `TrabajoActual_id_trabajo`, `estrato`, `OtroGenero_id_otro`, `Conyuge_id_conyuge`, `HIJOS_id_hijo`, `acudiente_idAcudiente`, `ciudad_idCiudad`) VALUES (NULL, '1007470549', 'Brayan David Gomez Rincon', '1', '2001-10-04', '1', NULL, '4', '1', '6', '0', '0', '0', '3');",
            [document,name,genderBox,Date,maritalStatus,sons,currentJob,stratum,otherGender,partner]
        );
        
        // res.json({
        //     id: result.insertId,
        //     document,
        //     name,
        //     genderBox
        // });
    } catch (error) {
        console.log(error);
    }
    
}