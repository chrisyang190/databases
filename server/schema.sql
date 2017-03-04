CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id int NOT NULL AUTO_INCREMENT,
--   text varchar(30) NULL,
--   room_id int NOT NULL,
--   user_id int NOT NULL,

--   PRIMARY KEY(id),

--   FOREIGN KEY (room_id)
--     REFERENCES rooms (id),

--   FOREIGN KEY (user_id)
--     REFERENCES users (id)
-- );

-- /* Create other tables and define schemas for them here! */

CREATE TABLE rooms (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(10) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(10) NULL,
  PRIMARY KEY(id)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  text varchar(30) NULL,
  room_id int NOT NULL,
  user_id int NOT NULL,

  PRIMARY KEY(id),

  FOREIGN KEY (room_id)
    REFERENCES rooms (id),

  FOREIGN KEY (user_id)
    REFERENCES users (id)
);

CREATE TABLE rooms_users (

  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  room_id int NOT NULL,
  PRIMARY KEY(id),

  FOREIGN KEY (room_id)
    REFERENCES rooms (id),

  FOREIGN KEY (user_id)
    REFERENCES users (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

