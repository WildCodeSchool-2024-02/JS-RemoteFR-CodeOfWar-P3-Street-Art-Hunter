
create table user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  lastName VARCHAR(255),
  firstname VARCHAR(255),
  pseudo VARCHAR(255) NOT NULL,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN NOT NULL DEFAULT FALSE,
  registration_date date not null DEFAULT (CURRENT_DATE) ,
  pictures TEXT,
  avatar TEXT
);

INSERT INTO user(lastname, firstname, pseudo, mail, password, isAdmin, pictures, avatar) 
    VALUES('Rossignol', 'alex', 'RossAlex', 'alex@gmail.com', 'Monpassword', true, null, null),
    ('More', 'charlotte', 'Chacha', 'cha@gmail.com', 'Monpassword1', true, null, null),
    ('Mare', 'rosa', 'Roro', 'rosa@gmail.com', 'Monpassword2', true, null, null),
    ('Mire', 'davido', 'Dada', 'davido@gmail.com', 'Monpassword3', true, null, null),
    ('lopez', 'david', 'lolo', 'lolo@gmail.com', 'Monpassword3', false, null, null),
    ('Rous', 'agathe', 'ag', 'age@gmail.com', 'Monpassword3', false, null, null);

-- create table style (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(80) NOT NULL,
--   description TEXT
-- );

-- create table city (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(80) NOT NULL
-- );

-- create table artwork(
--   id int primary key auto_increment not null,
--   title varchar(255) not null,
--   description text,
--   location int not null,
--   city varchar(80) not null,
--   create_date date not null,
--   image_url TEXT not null,
--   author VARCHAR(255),
--   isValidated BOOLEAN not null DEFAULT 0,
--   style_id INT not null,
--   foreign key(style_id) references style(id),
--   city_id INT not null,
--   foreign key(city_id) references city(id),
--   user_id int not null,
--   foreign key(user_id) references user(id)
-- );

-- create table favori(
--   user_id INT NOT NULL,
--   FOREIGN KEY(user_id) REFERENCES user(id),
--   artwork_id INT NOT NULL,
--   FOREIGN KEY(artwork_id) REFERENCES artwork(id)
-- );




