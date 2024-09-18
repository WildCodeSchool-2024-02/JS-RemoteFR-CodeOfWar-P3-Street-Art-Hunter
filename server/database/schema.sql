
CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    pseudo VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL UNIQUE,
    score INT DEFAULT 0,
    hashed_password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE,
    registration_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    avatar VARCHAR(255) DEFAULT 'https://picsum.photos/id/237/200/300'
);

INSERT INTO
    user (
        lastname,
        firstname,
        pseudo,
        mail,
        score,
        hashed_password,
        isAdmin,
        avatar
    )
VALUES (
        'Rossignol',
        'alex',
        'RossAlex0',
        'alex@gmail.com',
        3200,
        'Monpassword',
        TRUE,
        'https://cdn-icons-png.freepik.com/256/3530/3530467.png?uid=R159916031&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'
    ),
    (
        'Mored',
        'charlotte',
        'ChachaDtr',
        'charrl@gmail.com',
        3150,
        'Monpassword1',
        TRUE,
        'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436178.jpg?uid=R159916031&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'
    ),
    (
        'Mare',
        'rosa',
        'Roro',
        'rosa@gmail.com',
        3980,
        'Monpassword2',
        TRUE,
        'https://img.freepik.com/photos-premium/simple-sourire-homme-heureux-portrait-numerique-arriere-plan-rouge-vif_96461-13322.jpg?uid=R159916031&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'
    ),
    (
        'Mire',
        'davido',
        'Dada',
        'davido@gmail.com',
        2980,
        'Monpassword3',
        TRUE,
        'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436190.jpg?uid=R159916031&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'
    ),
    (
        'lopez',
        'david',
        'lolo',
        'lolo@gmail.com',
        4020,
        'Monpassword9',
        FALSE,
        'https://img.freepik.com/photos-premium/elevez-votre-marque-avatar-amical-qui-reflete-professionnalisme-ideal-pour-directeurs-ventes_1283595-18531.jpg?uid=R159916031&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'
    ),
    (
        'Rous',
        'agathe',
        'ag',
        'age@gmail.com',
        200,
        'Monpassword7',
        FALSE,
        'https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611746.jpg?uid=R159916031&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'
    ),
    ('Luna', 'Smith', 'lunaSmith', 'luna.smith@gmail.com', 20, 'LunaPass8', TRUE, 'https://img.freepik.com/psd-gratuit/avatar-fille-moderne_23-2150611791.jpg?uid=R159916036&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'),
('Max', 'Johnson', 'max33', 'max.johnson@gmail.com', 3450, 'MaxPass9', TRUE, 'https://img.freepik.com/psd-gratuit/avatar-homme-jeune_23-2150611867.jpg?uid=R159916037&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'),
('Eva', 'Brown', 'ev1bro', 'eva.brown@gmail.com', 1980, 'EvaPass10', FALSE, 'https://img.freepik.com/psd-gratuit/avatar-femme-petite_23-2150611972.jpg?uid=R159916039&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'),
('Leo', 'Davis', 'le22vis', 'leo.davis@gmail.com', 4790, 'LeoPass11', TRUE, 'https://img.freepik.com/psd-gratuit/avatar-homme-casual_23-2150612034.jpg?uid=R159916041&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'),
('Nina', 'Wilson', 'ninson', 'nina.wilson@gmail.com', 2350, 'NinaPass12', TRUE, 'https://img.freepik.com/psd-gratuit/avatar-femme-mode_23-2150612089.jpg?uid=R159916043&ga=GA1.1.11097458.1723198447&semt=ais_hybrid'),
('Oli', 'Martin', 'omartin', 'oli.martin@gmail.com', 520, 'OliPass13', FALSE, 'https://img.freepik.com/psd-gratuit/avatar-homme-sportif_23-2150612112.jpg?uid=R159916045&ga=GA1.1.11097458.1723198447&semt=ais_hybrid');

CREATE TABLE style (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    description TEXT
);

INSERT INTO
    style (name, description)
VALUES (
        'Graffiti',
        'Un style de street art utilisant de la peinture en aérosol pour créer des œuvres souvent colorées sur les murs urbains.'
    ),
    (
        'Stencil',
        'Un style basé sur l’utilisation de pochoirs pour créer des images ou des motifs répétitifs.'
    ),
    (
        'Mural',
        'Des peintures murales à grande échelle qui couvrent généralement tout un mur avec une scène ou une composition complexe.'
    ),
    (
        'Sticker Art',
        'Utilisation d’autocollants pour diffuser des messages ou des images dans des espaces publics.'
    ),
    (
        'Wheatpaste',
        'Collage de grandes affiches ou d’illustrations sur les murs en utilisant une pâte à base de farine.'
    ),
    (
        '3D Street Art',
        'Œuvres d’art en trois dimensions créant des illusions d’optique pour donner une impression de profondeur ou de relief.'
    ),
    (
        'Reverse Graffiti',
        'Création d’images ou de textes en nettoyant certaines parties d’une surface sale pour révéler le contraste.'
    ),
    (
        'Pixel Art',
        'Un style inspiré des graphiques pixelisés des jeux vidéo, reproduit sur les murs avec des carrés de couleur.'
    ),
    (
        'Yarn Bombing',
        'Recouvrement d’éléments urbains tels que les poteaux ou les bancs avec du tricot ou du crochet coloré.'
    ),
    (
        'Poster Art',
        'Collage d’affiches illustratives ou de propagande artistique sur les murs urbains, souvent avec un message social ou politique.'
    );

CREATE TABLE city (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL
);

INSERT INTO
    city (name)
VALUES ('Paris'),
    ('Lyon'),
    ('Bordeaux'),
    ('Saint Etienne'),
    ('Nice'),
    ('Marseille'),
    ('Angouleme'),
    ('Strasbourg'),
    ('Montpellier'),
    ('Toulouse');

CREATE TABLE artwork (
    id int PRIMARY KEY auto_increment NOT NULL,
    title varchar(255) NOT NULL,
    description text,
    lat DOUBLE NOT NULL,
    lon DOUBLE NOT NULL,
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

INSERT INTO
    artwork (
        title,
        description,
        lat,
        lon,
        image_url,
        author,
        isValidated,
        style_id,
        city_id,
        user_id
    )
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
    );

CREATE TABLE favorite (
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    artwork_id INT NOT NULL,
    FOREIGN KEY (artwork_id) REFERENCES artwork (id)
);

INSERT INTO
    artwork (
        title,
        description,
        lat,
        lon,
        image_url,
        author,
        isValidated,
        style_id,
        city_id,
        user_id
    )
VALUES (
        'le loup binational',
        'Le Finlandais Jussi TwoSeven a représenté la décomposition du mouvement d’un loup en pleine course (rappelant le travail du photographe Eadweard Muybridge sur l’étude du mouvement au XIXe siècle). Mi-canidé, mi-Tour Eiffel, l’artiste combine à la fois le symbole de Paris et celui de son pays, la Finlande, et un élément de la ville et de la nature pour créer une œuvre on ne peut plus poétique.',
        100,
        50,
        'https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2022/07/cda2022_jussi_two_seven_street_art_tunnel_paris_tuileries_2-tt-width-620-height-399-fill-0-crop-0-bgcolor-eeeeee.jpg',
        'Jussi TwoSeven',
        1,
        3,
        1,
        2
    ),
    (
        'la fille au ballon rouge',
        'Une œuvre en noir et blanc représentant une jeune fille qui lâche son ballon rouge',
        48.8566,
        2.3522,
        'https://picsum.photos/id/650/300',
        'Banksy',
        1,
        2,
        1,
        3
    ),
    (
        'Le Phare Urbain',
        'Un phare illuminé au milieu d\'une ville sombre, symbolisant l\'espoir et la direction dans un environnement chaotique.',
        34.0522,
        -118.2437,
        'https://picsum.photos/id/500/200',
        'Anonyme',
        0,
        2,
        2,
        4
    ),
    (
        'Le Chat de Rue',
        'Un chat coloré assis sur un mur de briques, observant les passants avec un regard mystérieux. L\'artiste joue avec les couleurs pour rendre l\'animal presque surréaliste.',
        51.5074,
        -0.1278,
        'https://picsum.photos/id/50/300/200',
        'Mystic Feline',
        0,
        3,
        3,
        5
    ),
    (
        'La Cascade Humaine',
        'Une cascade d\'eau se transforme progressivement en une silhouette humaine, symbolisant le lien entre la nature et l\'humanité.',
        35.6895,
        139.6917,
        'https://picsum.photos/id/1000/200/300',
        'Anonyme',
        0,
        4,
        4,
        6
    ),
    (
        'L\'Oiseau Bleu',
        'Un oiseau bleu vibrant s\'élève au-dessus des bâtiments, représentant la liberté et la paix dans un environnement urbain.',
        40.7128,
        -74.0060,
        'https://picsum.photos/id/250/300',
        'Anonyme',
        0,
        5,
        5,
        1
    ),
    (
        'Le Voyageur Solaire',
        'Un voyageur vêtu d\'un manteau doré marche à travers un désert urbain, illuminé par un soleil couchant rouge.',
        41.9028,
        12.4964,
        'https://picsum.photos/id/230/200',
        'Anonyme',
        0,
        6,
        6,
        2
    ),
    (
        'La Fleur Urbaine',
        'Une immense fleur rouge pousse entre les fissures du béton, représentant la résilience de la nature face à l\'urbanisation.',
        55.7558,
        37.6176,
        'https://picsum.photos/id/238/200/300',
        'Anonyme',
        1,
        7,
        7,
        3
    ),
    (
        'Le Guerrier du Silence',
        'Un guerrier en armure se tient silencieusement sur un toit, observant la ville en contrebas, prêt à défendre les innocents.',
        52.5200,
        13.4050,
        'https://picsum.photos/id/237/200/300',
        'Anonyme',
        1,
        8,
        8,
        4
    );