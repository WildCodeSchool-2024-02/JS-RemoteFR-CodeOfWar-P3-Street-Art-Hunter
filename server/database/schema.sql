USE streetArt;

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
        'graffiti',
        'lorem bfgfdsgdshdgqllsjgsdllkqsdl.'
    ),
    (
        'pop art',
        'lorem bfgfdsgdshdgqllsjgsdllkqsdl.'
    ),
    (
        'abstrait',
        'lorem bfgfdsgdshdgqllsjgsdllkqsdl.'
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
    lat DOUBLE NOT NULL,
    lon DOUBLE not null,
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

INSERT INTO artwork 
(title, description, lat, lon, image_url, author, isValidated, style_id, city_id, user_id) 
VALUES (
    'le loup binational', 
    'Le Finlandais Jussi TwoSeven a représenté la décomposition du mouvement d’un loup en pleine course (rappelant le travail du photographe Eadweard Muybridge sur l’étude du mouvement au XIXe siècle). Mi-canidé, mi-Tour Eiffel, l’artiste combine à la fois le symbole de Paris et celui de son pays, la Finlande, et un élément de la ville et de la nature pour créer une œuvre on ne peut plus poétique.', 
    41.2,
    10, 
    'https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2022/07/cda2022_jussi_two_seven_street_art_tunnel_paris_tuileries_2-tt-width-620-height-399-fill-0-crop-0-bgcolor-eeeeee.jpg', 
    'Jussi TwoSeven', 
    1, 
    3, 
    1, 
    2
)
;

CREATE TABLE favorite (
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    artwork_id INT NOT NULL,
    FOREIGN KEY (artwork_id) REFERENCES artwork (id)
);

INSERT INTO artwork (title, description, lat, lon, image_url, author, style_id, city_id, user_id) VALUES
('Le Baiser de l\'Hôtel de Ville', 'Sculpture en bronze située sur la place de l\'Hôtel de Ville.', 48.8566, 2.3522, 'https://example.com/images/baiser_hotel_de_ville.jpg', 'Robert Doisneau', 1, 1, 1),
('La Pyramide du Louvre', 'Œuvre d\'art moderne en verre au Musée du Louvre.', 48.8606, 2.3376, 'https://example.com/images/pyramide_louvre.jpg', 'Ieoh Ming Pei', 2, 1, 2),
('Le Mur des Je t\'aime', 'Mur de carreaux bleus avec les mots "Je t\'aime" en plusieurs langues.', 48.8867, 2.3431, 'https://example.com/images/mur_je_taime.jpg', 'Frédéric Baron', 3, 1, 3),
('Les Colonnes de Buren', 'Colonnes rayées en noir et blanc au Palais Royal.', 48.8653, 2.3400, 'https://example.com/images/colonnes_buren.jpg', 'Daniel Buren', 2, 1, 2),
('Le Pont des Arts', 'Pont couvert de cadenas par les amoureux sur la Seine.', 48.8594, 2.3376, 'https://example.com/images/pont_des_arts.jpg', 'Anonymous', 2, 1, 2);