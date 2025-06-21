const mysql = require('mysql2');

const db = mysql.createPool({
  socketPath: '/var/run/mysqld/mysqld.sock',
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'dogwalks'
});

module.exports = db;