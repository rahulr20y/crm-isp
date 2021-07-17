/*
show databases;
show TABLES;
 
CREATE TABLE complaints (
 id INT PRIMARY KEY Auto_increment,
 customer_name VARCHAR(40),
 customer_email VARCHAR(40) Unique,
 category VARCHAR(40),
 complaint_desc VARCHAR(200),
 customer_status varchar(40),
 employee_status varchar(40),
 employee_id varchar(40) DEFAULT(NULL),
 FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
 
CREATE TABLE employees (
 
 employee_id varchar(40) PRIMARY KEY,
 employee_email VARCHAR(40),
 employee_name VARCHAR(40),
 expertise varchar(40)
);
 
INSERT INTO complaints VALUES(7,'luis', 'luis@xyz.com', 'router', 'long long desc','No','No','CHD25');
INSERT INTO employees VALUES('CHD25', 'luisemp2@xyz.com','luisemp2', 'slow internet');
INSERT INTO customers VALUES(1,'luis@xyz.com','luis', '123, gandhi nagar new york');
 
select * from complaints;
select * from employees;
select * from customers;
describe complaints;
describe employees;
describe customers;
 
delete from complaints;
delete from employees;
delete from customers;
 
 
Delete from customers where id = 1;
 
drop table complaints;
drop table employees;
drop table customers;
 
ALTER TABLE complaints
ADD FOREIGN KEY (employee_id) REFERENCES employees(employee_id);
 
 
ALTER TABLE complaints DROP FOREIGN KEY employee_id;

*/
