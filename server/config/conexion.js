import { createPool } from "mysql2/promise";
export const PORT = 4000;

export const pool = createPool({
    host: 'localhost',
    user:'root',
    password:'bd#1234',
    database:'mydb'
});



// var conexion = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'bd#1234',
//     database:'mydb'
// });

// conexion.connect(
//     (error)=>{
//         if (!error) {
//             console.log('Conexión establecida');
//         } else{
//             console.log(error);
//         }
//     }
// );

// module.exports=conexion;