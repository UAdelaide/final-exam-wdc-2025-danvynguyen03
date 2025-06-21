const mysql = require('mysql2');

const pool = mysql.createPool({
  socketPath: '/var/run/mysqld/mysqld.sock',
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'dogwalks'
});

module.exports = pool.promise();