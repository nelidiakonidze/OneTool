const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: 'Onetool',
});

module.exports = {
  connection,
};
