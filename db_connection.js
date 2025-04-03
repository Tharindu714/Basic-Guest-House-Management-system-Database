const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hotel_db'
});

connection.query('SELECT * FROM rooms', (err, results) => {
    if (err) throw err;
    console.log(results);
});

connection.end();
