USE employees_db


INSERT INTO roles_list ( title, department_list_id, salary)
VALUE 
( “Sales Lead”, “1”, “100000”),
( “Salesperson”, “3”, “80000”),
( “Lead Engineer”, “4”, “150000”),
( “Software Engineer”, “3”,  “120000”),
( “Account Manager”, “2”, “160000”),
(“Accountant”, “3”, “125000”),
(“Legal Team Lead”, “1”, “250000”),
( “Lawyer”, “3”, “190000”),  
;


INSERT INTO department_list (depart_name)
VALUE 
(“Sales”),
(“Engineering”),
(“Finance”),
(“Law”),
;

INSERT INTO employee_list (first_name, last_name, role_list_id, manager_id, )
VALUE 
(“Sarah”, “Jone”, 2, 3),
(“Marc”, “Harris”, 1, 2),
(“Karen”, “Baker”, 3, 1),
(“Jeff”, “Baker”, 3, 2),
(“Isaac”, “Miller”, 4, 1),
;
