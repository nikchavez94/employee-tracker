const inquirer = require("inquirer");
const db = require("./config/connections");
//const { viewAllDepartments, addDepartment } = require("./controllers/departmentController.js");
require("console.table")
db.authenticate().then(() => {
    console.log("Database connected...");
    runApp()
}).catch(err => console.log("Error: " + err));
function runApp() {
inquirer
    .prompt([
        {
            type: "list",
            message: "Please select one from below:",
            choices: [
                "ViewAllEmployees",
                "AddEmployee",
                "ViewAllRoles",
                "AddRole",
                "UpdateEmployeeRole",
                "ViewAllDepartments",
                "AddDepartment",
            ],
            name: "start",
        },
    ]).then((answer) => { console.log(answer.start)
        switch (answer.start) {
            case "ViewAllEmployees":
                viewAllEmployees();
                break;
            case "AddEmployee":
                addEmployee();
                break;
            case "ViewAllRoles":
                viewAllRoles();
                break;
            case "AddRole":
                addRole();
                break;
            case "UpdateEmployeeRole":
                updateEmployeeRole();
                break;
            case "ViewAllDepartments":
                viewAllDepartments();
                break;
            case "AddDepartment":
                addDepartment();
                break;
        }
    });
}
function viewAllDepartments() {
    db.query('SELECT * FROM departments', function (err, results){
        if(err) {
            console.log(err)
        }
        console.table(results), runApp();
    });

}






