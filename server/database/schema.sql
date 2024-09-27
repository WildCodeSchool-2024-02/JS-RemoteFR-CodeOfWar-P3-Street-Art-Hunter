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

CREATE TABLE artwork (
    id int PRIMARY KEY auto_increment NOT NULL,
    title varchar(255) NOT NULL,
    description text,
    lat DOUBLE NOT NULL,
    lon DOUBLE NOT NULL,
    create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    image_url TEXT NOT NULL,
    author VARCHAR(255),
    isValidated INT DEFAULT 0,
    style_id INT NOT NULL,
    FOREIGN KEY (style_id) REFERENCES style (id),
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
        user_id
    )
VALUES 
    (
        "Jean-Pierre Michel",
        "Homme politique français qui a soutenu la loi sur le PACS et l'union civile en 1999, et a été impliqué dans la loi sur le mariage pour tous en 2012.",
        48.85821934194171,
        2.3524330874274324,
        "/artwork_JPM.png",
        "C215",
        1,
        3,
        1
        ),
        (
            "Rencontre Furtive",
            "Fresque RATP / Notorious Brand",
            49.02247188289743,
            2.336812028069045,
            "artwork_rencontreFurtive.jpg",
            "Graffmatt",
            1,
            3,
            1
        ),
        (
            "Ciclope",
            "Fresque créée dans le cadre du Caps festival organisé par l'association Co42 en parteneriat avec rentingArt et la ville de Clichy.",
           49.04061964902911,
           2.3368132467285405,
            "artwork_ciclope.jpeg",
            "Caps Festival",
            1,
            3,
            2
        ),
                (
            "Revenge of the prohibition",
            "amazing sticker",
           49.04061964902911,
           2.3368132467285405,
            "artwork_interdit.jpg",
            "Clet Abraham",
            1,
            4,
            2
        ),
    (
        "The Kissing Policemen",
        "Un mural représentant deux policiers s'embrassant, symbole de l'amour et de l'égalité.",
        48.861992,
        2.334385,
        "/artwork_kissing.jpg",
        "Banksy",
        1,
        2,
        3
    ),
    (
        "Wheatpaste Art",
        "Utilisation de collage et de papier pour créer des œuvres éphémères sur les murs.",
        48.8655,
        2.3212,
        "artwork_wheatpaste.webp",
        "Various Artists",
        1,
        5,
        4
    ),
    (
        "Space Invader PA_1281",
        "Murs décorés avec des motifs de pixel art, inspirés par le rétro gaming.",
        48.865000,
        2.360000,
        "artwork_pixel.webp",
        "Invader",
        1,
        8,
        4
    ),
    (
        "Mural in Rue Dénoyez",
        "Un mural vivant dans une rue connue pour son street art à Paris.",
        48.8668,
        2.3695,
        "artwork_denoyez.jpeg",
        "Various Artists",
        1,
        3,
        5
    ),
    (
        "Space Invader PA_1156",
        "Murs décorés avec des motifs de pixel art, inspirés par le rétro gaming.",
        48.857000,
        2.357000,
        "artwork_pixel2.webp",
        "Invader",
        1,
        8,
        5
    ),
("JO - unofficial title -",
"Oeuvre du célèbre Monsieur Chat",
48.8867,
2.3431,
"artwork_monsieurChat.jpg",
"Thoma Vuille (M. Chat)",
1,
1,
6
),
("La Seine en Tricot",
"Un yarn bombing géant représentant la Seine et ses ponts en laine colorée.",
48.8566,
2.3522, 
"artwork_yarnBombing2.webp",
"Magda Sayeg",
1,
9,
6
),
("Belle mosaïque",
"Mosaïque réalisée par le célèbre artiste norvégien Ememem",
43.27532137810824,
5.360504307848718,
"artwork_mosaique.jpg",
"Ememem",
1,
8,
7
),
("Nûdem Durak",
"Le peintre français Mahn Kloix vient d'achever une nouvelle fresque dans les rues de Marseille.",
43.291213883290716,
5.387537039313701,
"artwork_muralMarseille.jpg",
"Mahn Kloix",
1,
3,
7
),
("Astro",
"Superbe oeuvre 3D située à l'entrée du building Totem",
43.30641822935788,
5.367925273443503,
"artwork_3D.jpg",
"Unknown",
1,
6,
8
),
("Manifestation ! les chats se rebellent !",
"Oeuvre du célèbre Monsieur Chat",
43.29360762493197,
5.384264950801516,
"artwork_monsieurChat2.jpg",
"Thoma Vuille (M. Chat)",
1,
1,
8
),
("Man vs wild",
"2 grands artistes réunis pour un magnifique mural dans les rues de la cité fosséenne",
43.29469316180753,
5.383722162987219,
"artwork_marseille.jpg",
"Mahn Kloix, Giuseppe Gütan",
1,
3,
8
),
 (
        'Fluo',
        'Une œuvre de street art vibrante capturée dans les rues de Bordeaux.',
        44.8378,
        -0.5792,
        'artwork_bordeaux.webp',
        'ArtStudent',
        1,
        3,
        6
    ),
    (
        'Maison rénovée',
        'Une fresque murale saisissante trouvée à Roanne.',
        46.0343,
        4.0744,
        'artwork_roanne.webp',
        'Bombographe',
        1,
        3,
        6
    ),
    ("L'Appel",
"Super Bourdi",
46.15834208033365,
-1.149851850450287,
"artwork_LR1.jpg",
"Super Bourdi",
1,
5,
9
)
,
    ("JACE",
"Œuvre d'art de JACE, rendue possible par l'association Lord.
2022.",
46.148886344260646,
-1.1553362126202626,
"artwork_LR2.jpg",
"JACE",
1,
3,
9
),
    ("Pota",
"Un coléoptère de Pota.",
46.159929699716564,
-1.1499766457765002,
"artwork_LR3.jpg",
"Pota",
1,
5,
9
);
-- ("",
-- "",
-- ,
-- ,
-- "",
-- "",
-- 1,
-- ,
-- 7
-- );
      

CREATE TABLE favorite (
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    artwork_id INT NOT NULL,
    FOREIGN KEY (artwork_id) REFERENCES artwork (id)
);

