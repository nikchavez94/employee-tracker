require('dotenv').config();
const Sequelize = require('sequelize');

const db = new Sequelize({
  dialect: 'mysql',
  username: 'root', //process.env.DB_USER,
  password: 'password', //process.env.DB_PASSWORD,
  database: 'employee_db',
  host: '127.0.0.1',    
  port: 3306,
});

module.exports = db;

