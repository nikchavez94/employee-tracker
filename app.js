const inquirer = require("inquirer");
const mysql = require('mysql2')

require("console.table")
const db = mysql.createConnection({
  user: 'root', //process.env.DB_USER,
  password: 'password', //process.env.DB_PASSWORD,
  database: 'employee_db',
  host: '127.0.0.1', 
});
function runApp() 
{
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
            name: "start"
        },
        //another way to do an if statment (condition)
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
   function viewAllDepartments(){
        const results =  db.query('SELECT * FROM departments', function(err, results) {
          if(err) {
            console.log(err)
          } 
          console.table(results),
        runApp(); 
        });
          
    }

    function viewAllEmployees() {
        // Query to select all employees from the 'employees' table
        console.log("i'm here")
        db.query('SELECT * FROM employees', function (err, results) {
            if (err) {
                console.log(err);
            } else {
              console.table(results), runApp();
            }
  
        });
    }

// Function to view all roles
function viewAllRoles() {
    // Query to select all roles from the 'roles' table
    db.query('SELECT * FROM roles', function (err, results) {
        if (err) {
            console.log(err);
        } else {
            // Display the results in a table format
            console.table(results);
        }

        // Continue running the main application after displaying roles
        runApp();
    });
}

// Function to add an employee
function addEmployee() {
    // Prompt the user for information
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the first name of the employee:",
                name: "first_name",
            },
            {
                type: "input",
                message: "Enter the last name of the employee:",
                name: "last_name",
            },
            {
                type: "input",
                message: "Enter the role ID of the employee:",
                name: "role_id",
            },
            {
                type: "input",
                message: "Enter the manager ID of the employee (optional, press Enter to skip):",
                name: "manager_id",
            },
        ])
        .then((answers) => {
            // Extract answers
            const firstName = answers.first_name
            const lastName = answers.last_name
            const roleId = answers.role_id
            const managerId = answers.manager_id 

            db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) values (?,?,?,?)', [firstName, lastName, roleId, managerId], function(err, results) {
              if(err) {
                console.log(err)

              }
              viewAllEmployees(), runApp()
            })

        });
};

//add role function
function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the title of the new role:",
          name: "title",
        },
        {
          type: "input",
          message: "Enter the salary for the new role:",
          name: "salary",
        },
        {
          type: "input",
          message: "Enter the department ID for the new role:",
          name: "department_id",
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
          [answer.title, answer.salary, answer.department_id],
          function (err, results) {
            if (err) {
              console.log(err);
            }
            console.log("Role added successfully!");
            // Optionally, you can call runApp() or perform other actions
          }
        );
      });
  };
  
  //add department function
  function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the name of the new department:",
          name: "name",
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO departments (name) VALUES (?)",
          [answer.name],
          function (err, results) {
            if (err) {
              console.log(err);
            }
            console.log("Department added successfully!");
            // Optionally, you can call runApp() or perform other actions
          }
        );
      });
  };
};
runApp();