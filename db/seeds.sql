USE employee_db;

INSERT INTO departments (name)
VALUES 
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Law");
  
INSERT INTO roles (title, department_id, salary)
VALUES 
  ("Sales Lead", 1, 100000),
  ("Salesperson", 3, 80000),
  ("Lead Engineer", 4, 150000),
  ("Software Engineer", 3, 120000),
  ("Account Manager", 2, 160000),
  ("Accountant", 3, 125000),
  ("Legal Team Lead", 1, 250000),
  ("Lawyer", 3, 190000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
  ("Sarah", "Jone", 2, NULL),
  ("Marc", "Harris", 1, 2),
  ("Karen", "Baker", 3, 1),
  ("Jeff", "Baker", 3, 2),
  ("Isaac", "Miller", 4, 1);
