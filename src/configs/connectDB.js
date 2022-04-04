// import mysql from 'mysql2/promise';
import mysql from 'mysql2';

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ridashop'
// });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ridashop'
});

export default connection;