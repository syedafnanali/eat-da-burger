DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name VARCHAR(250) not null,
    devoured boolean default false,
    PRIMARY KEY(id)
);