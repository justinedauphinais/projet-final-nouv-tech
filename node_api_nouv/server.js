const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const cors = require('cors');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projet_cloud',
    password: '2001',
    port: 5432,
});


app.use(cors());

app.use(express.json());

app.get('/recipes', async (req, res) => {

    try {
        const query = 'SELECT ' +
            '    recette.id, ' +
            '    recette.nom AS recette_nom, ' +
            '    recette.description AS recette_description, ' +
            '    recette.portion, ' +
            '    recette.temps, ' +
            '    recette.image, ' +
            '    difficulte.nom AS difficulte_nom, ' +
            '    categorie.nom AS categorie_nom ' +
            'FROM ' +
            '    recette ' +
            'INNER JOIN ' +
            '    difficulte ON recette.id_difficulte = difficulte.id ' +
            'INNER JOIN ' +
            '    categorie ON recette.id_categorie = categorie.id;';
        const { rows } = await pool.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('failed');
    }
});

app.post('/recipes/filter', async (req, res) => {

    const { nom, difficulte, categorie } = req.body;

    console.log(nom, difficulte, categorie);

    try {
        let query = 'SELECT ' +
            '    recette.id, ' +
            '    recette.nom AS recette_nom, ' +
            '    recette.description AS recette_description, ' +
            '    recette.portion, ' +
            '    recette.temps, ' +
            '    recette.image, ' +
            '    difficulte.nom AS difficulte_nom, ' +
            '    categorie.nom AS categorie_nom ' +
            'FROM ' +
            '    recette ' +
            'INNER JOIN ' +
            '    difficulte ON recette.id_difficulte = difficulte.id ' +
            'INNER JOIN ' +
            '    categorie ON recette.id_categorie = categorie.id ';

        const conditions = [];

        if (difficulte !== "-1") {
            conditions.push(`difficulte.id = ` + difficulte);
        }

        if (categorie !== "-1") {
            conditions.push(`categorie.id = ` + categorie);
        }

        if (nom !== undefined && nom !== null && nom !== '') {
            conditions.push(`recette.nom LIKE '%` + nom +`%'`);
        }

        console.log(conditions);

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ') + ';';
        }

        const { rows } = await pool.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('failed');
    }
});

app.get('/difficultes', async (req, res) => {

    try {
        const query = 'SELECT * FROM difficulte;';
        const { rows } = await pool.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('failed');
    }
});

app.get('/categories', async (req, res) => {

    try {
        const query = 'SELECT * FROM categorie;';
        const { rows } = await pool.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('failed');
    }
});

app.get('/recipes/:id', async (req, res) => {

    try {
        const query = `
            SELECT
                recette.*,
                difficulte.nom AS difficulte_nom,
                categorie.nom AS categorie_nom,
                (
                    SELECT ARRAY_AGG(allergie.nom)
                    FROM allergie_recette
                    INNER JOIN allergie ON allergie.id = allergie_recette.id_allergie
                    WHERE allergie_recette.id_recette = recette.id
                ) AS allergies,
                (
                    SELECT ARRAY_AGG(ingredient.nom)
                    FROM recette_ingredient
                    INNER JOIN ingredient ON ingredient.id = recette_ingredient.id_ingredient
                    WHERE recette_ingredient.id_recette = recette.id
                ) AS ingredients,
                (
                    SELECT ARRAY_AGG(instruction.description)
                    FROM instruction
                    WHERE instruction.id_recette = recette.id
                ) AS instructions 
            FROM
                recette
            INNER JOIN
                difficulte ON recette.id_difficulte = difficulte.id
            INNER JOIN 
                    categorie ON recette.id_categorie = categorie.id
            WHERE
                recette.id = $1
        `;

        const { rows } = await pool.query(query, [req.params.id]);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('failed');
    }
});

app.get('/home', async (req, res) => {

    try {
        const query = 'SELECT ' +
            '    recette.id, ' +
            '    recette.nom AS recette_nom, ' +
            '    recette.description AS recette_description, ' +
            '    recette.portion, ' +
            '    recette.temps, ' +
            '    recette.image, ' +
            '    difficulte.nom AS difficulte_nom, ' +
            '    categorie.nom AS categorie_nom ' +
            'FROM ' +
            '    recette ' +
            'INNER JOIN ' +
            '    difficulte ON recette.id_difficulte = difficulte.id ' +
            'INNER JOIN ' +
            '    categorie ON recette.id_categorie = categorie.id ' + 
            'ORDER BY ' + 
            '    recette.id DESC;';
        const { rows } = await pool.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('failed');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});