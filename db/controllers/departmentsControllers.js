const db = require("./config/connection.js");

const viewAllDepartments = () => {
    db.query('SELECT * FROM deparment', (err, results) => {
        return results;
    });

};

const addDepartment = () => {
    db.query('INSERT INTO ')
}