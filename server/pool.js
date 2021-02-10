const { Pool } = require('pg');

// const pool = new Pool({
//   database: 'gallery'
// });

const pool = new Pool({
  user: 'ubuntu',
  password: 'ubuntu',
  host: '54.183.200.214',
  dialect: 'postgres',
  database: 'postgres',
  port: 5432
});

pool.connect();

module.exports = pool;
