const pool = require('./db'); // Assurez-vous d'importer votre connexion à la base de données

async function seedDatabase() {
    const queries = [
        `INSERT INTO difficulte (id,nom) VALUES (1,'Facile'), (2,'Moyen'), (3,'Difficile'), (4,'Expert');`,
        `INSERT INTO categorie (id,nom) VALUES (1,'Entrée'), (2,'Plat principal'), (3,'Dessert'), (4,'Snack');`,
        `INSERT INTO allergie (id,nom) VALUES (1,'Arachides'), (2,'Lactose'), (3,'Gluten'), (4,'Noix');`,
        `INSERT INTO ingredient (id,nom) VALUES (1,'Tomate'), (2,'Poulet'), (3,'Farine'), (4,'Chocolat');`,
        `INSERT INTO recette (id, nom, description, portion, temps, id_difficulte, id_categorie, image) VALUES
            (1,'Mini-burger', 'Des mini-burgers pour impressionner vos invités.', 4, 30, 1, 1, 'https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/47/entreechaude.jpg'),
            (2,'La viande patate', 'Le meilleurs repas quand on est lâche!', 2, 45, 2, 2, 'https://assets.afcdn.com/recipe/20180503/79003_w1024h768c1cx3390cy3500cxt0cyt0cxb6666cyb4992.webp'),
            (3,'Gâteau léger', 'Un desert pour ceux aime les petits fruits! ', 6, 60, 3, 3, 'https://s3.amazonaws.com/gmi-digital-library/d4b45de8-1878-4deb-ae0e-a69807c42f2b.jpg'),
            (4,'Les crudités', 'La meilleures collations pour un programmeur qui a faim!', 5, 15, 4, 4, 'https://www.soreltracyetcie.com/assets/Uploads/Images/Rubriques/nutrition/_resampled/CroppedFocusedImageWyIxOTIwIiwiODUwIiwiNTAtNTAiXQ/Collations-Sante-Soreltracyetcie.jpg');`,
        `INSERT INTO allergie_recette (id_allergie, id_recette) VALUES
            (1, 1), (2, 2), (3, 3), (4, 4);`,
        `INSERT INTO instruction (id,id_recette, description) VALUES
            (1,1, 'Il faut cuire la boulette de viande.'),
            (2,1, 'Il faut assembler le burger.'),
            (3,2, 'Il faut cuire la viande et les patates.'),
            (4,2, 'Il faut assembler le plat. (attention aux patates chaudes)'),
            (5,3, 'Il faut mélanger les ingrédients.'),
            (6,3, 'Il faut le cuire au four à 350 F.'),
            (7,4, 'Il faut couper les légumes.'),
            (8,4, 'Il faut mettre les légumes dans un bol.');`,
        `INSERT INTO recette_ingredient (id_recette, id_ingredient) VALUES
            (1, 1), (1, 2), (2, 3), (2, 4), (3, 1), (3, 3), (4, 2), (4, 4);`
    ];

    try {
        for (let query of queries) {
            await pool.query(query);
        }
        console.log('Seeding complete.');
    } catch (err) {
        console.error('Error during seeding:', err);
    }
}

seedDatabase();