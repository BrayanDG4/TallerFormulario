import { createPool } from "mysql2/promise";
export const PORT = 4000;

export const pool = createPool({
    host: 'localhost',
    user:'root',
    password:'bd#1234',
    database:'mydb'
});
