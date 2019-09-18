-- mysql -u root -p < ~/path_to_code/backend/init.sql

DROP DATABASE IF EXISTS Onetool;
CREATE DATABASE Onetool;

USE Onetool;

CREATE TABLE Users (
 id INT NOT NULL AUTO_INCREMENT,
 username VARCHAR(255) NOT NULL,
 email VARCHAR(320) UNIQUE NOT NULL ,
 PRIMARY KEY (id));

