CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    pseudo VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE,
    registration_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    pictures TEXT,
    avatar TEXT
);

INSERT INTO
    user (
        lastname,
        firstname,
        pseudo,
        mail,
        password,
        isAdmin,
        pictures,
        avatar
    )
VALUES (
        'Rossignol',
        'alex',
        'RossAlex',
        'alex@gmail.com',
        'Monpassword',
        TRUE,
        NULL,
        NULL
    ),
    (
        'More',
        'charlotte',
        'Chacha',
        'cha@gmail.com',
        'Monpassword1',
        TRUE,
        NULL,
        NULL
    ),
    (
        'Mare',
        'rosa',
        'Roro',
        'rosa@gmail.com',
        'Monpassword2',
        TRUE,
        NULL,
        NULL
    ),
    (
        'Mire',
        'davido',
        'Dada',
        'davido@gmail.com',
        'Monpassword3',
        TRUE,
        NULL,
        NULL
    ),
    (
        'lopez',
        'david',
        'lolo',
        'lolo@gmail.com',
        'Monpassword3',
        FALSE,
        NULL,
        NULL
    ),
    (
        'Rous',
        'agathe',
        'ag',
        'age@gmail.com',
        'Monpassword3',
        FALSE,
        NULL,
        NULL
    );

CREATE TABLE style (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    description TEXT
);

INSERT INTO
    style (name, description)
VALUES (
        'tag graffiti',
        'Le tag est en réalité la trace d’un artiste. C’est une manière pour lui de se faire connaître en dessinant son nom à l’aide d’une bombe aérosol, de marqueurs ou encore d’autocollants (stickers)'
    ),
    (
        'Le Wildstyle',
        'Ce style de graffiti représente un ensemble de lettres entremêlées entre elles'
    ),
    (
        'pochoir',
        'Le pochoir consiste à préparer un patron troué de formes nettes par lesquelles on va pouvoir venir appliquer de la peinture ou passer le spray d’une bombe aérosol.'
    );

CREATE TABLE city (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL
);

INSERT INTO
    city (name)
VALUES ('Paris'),
    ('Lyon'),
    ('Marseille'),
    ('Bordeaux'),
    ('Toulouse');

CREATE TABLE artwork (
    id int PRIMARY KEY auto_increment NOT NULL,
    title varchar(255) NOT NULL,
    description text,
    lat int NOT NULL,
    lon int not null,
    create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    image_url TEXT NOT NULL,
    author VARCHAR(255),
    isValidated BOOLEAN NOT NULL DEFAULT 0,
    style_id INT NOT NULL,
    FOREIGN KEY (style_id) REFERENCES style (id),
    city_id INT NOT NULL,
    FOREIGN KEY (city_id) REFERENCES city (id),
    user_id int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);