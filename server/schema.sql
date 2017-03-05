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

-- CREATE TABLE rooms (

--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(10) NULL,
--   PRIMARY KEY(id)
-- );

CREATE TABLE users (

  id int NOT NULL AUTO_INCREMENT,
  username varchar(10) NULL,
  PRIMARY KEY(id)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  text varchar(30) NULL,
  roomname varchar(10) NULL,
  user_id int NOT NULL,

  PRIMARY KEY(id)

  -- FOREIGN KEY (room_id)
  --   REFERENCES rooms (id),

  -- FOREIGN KEY (user_id)
  --   REFERENCES users (id)
);

-- CREATE TABLE rooms_users (

--   id int NOT NULL AUTO_INCREMENT,
--   user_id int NOT NULL,
--   room_id int NOT NULL,
--   PRIMARY KEY(id),

--   FOREIGN KEY (room_id)
--     REFERENCES rooms (id),

--   FOREIGN KEY (user_id)
--     REFERENCES users (id)
-- );

INSERT INTO users (id, username) VALUES (1, 'John');
-- insert into rooms (id, roomname) values (NULL, 'lobby');
insert into messages (id, text, roomname, user_id) values (1, 'Hi there', 'lobby', 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

