const { Pool } = require('pg');
// const auth = require('../../config');
let pool;

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  pool = new Pool({
    user: 'alishaedington',
    host: 'localhost',
    database: 'user_recipes',
    password: auth.PG_PASS,
    port: 5432,
  });
}

pool.connect()
  .then(() => console.log('successfully connected'))
  .catch((err) => console.log('you are not connected, try again later.', err));

module.exports = pool;
