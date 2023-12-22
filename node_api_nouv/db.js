const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projet_cloud',
    password: '2001',
    port: 5432,
    max: 20,
});

module.exports = pool;