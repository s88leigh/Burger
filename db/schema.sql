--In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(300) NOT NULL,
  devoured boolean,
  PRIMARY KEY(id)
);
insert into burgers(burger_name) values ("avocado burger");
insert into burgers(burger_name) values ("mushroom burger");
insert into burgers(burger_name) values ("fish burger");

select * from burgers;
--Create the burgers_db.
--Switch to or use the burgers_db.
--Create a burgers table with these fields:


--id: an auto incrementing int that serves as the primary key.

--burger_name: a string.

--devoured: a boolean.

--Run the schema.sql and seeds.sql files into the mysql server from the command line