const pool = require('./db'); // Assurez-vous d'importer votre connexion à la base de données

async function resetDatabase() {
    const dropQueries = [
        `DROP TABLE IF EXISTS allergie_recette, instruction, recette_ingredient, recette, allergie, ingredient, difficulte, categorie CASCADE;`
    ];

    const createQueries = [
        `CREATE TABLE difficulte (
            id SERIAL PRIMARY KEY,
            nom TEXT
        );`,
        `CREATE TABLE categorie (
            id SERIAL PRIMARY KEY,
            nom TEXT
        );`,
        `CREATE TABLE allergie (
            id SERIAL PRIMARY KEY,
            nom TEXT
        );`,
        `CREATE TABLE ingredient (
            id SERIAL PRIMARY KEY,
            nom TEXT
        );`,
        `CREATE TABLE recette (
            id SERIAL PRIMARY KEY,
            nom TEXT,
            description TEXT,
            portion int,
            temps int,
            id_difficulte int REFERENCES difficulte (id),
            id_categorie int REFERENCES categorie (id),
            image TEXT
        );`,
        `CREATE TABLE allergie_recette (
            id_allergie int REFERENCES allergie (id),
            id_recette int REFERENCES recette (id)
        );`,
        `CREATE TABLE instruction (
            id SERIAL PRIMARY KEY,
            id_recette int REFERENCES recette (id),
            description TEXT
        );`,
        `CREATE TABLE recette_ingredient (
            id_recette int REFERENCES recette (id),
            id_ingredient int REFERENCES ingredient (id)
        );`
    ];

    try {
        for (let query of dropQueries) {
            await pool.query(query);
            console.log('Tables dropped successfully');
        }

        for (let query of createQueries) {
            await pool.query(query);
            console.log('Table created successfully');
        }

        console.log('Database reset and recreated successfully');
    } catch (err) {
        console.error('Error during database reset:', err);
    }
}

resetDatabase();