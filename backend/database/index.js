const { Pool } = require('pg');
const auth = require('../../config');

const pool = new Pool({
  user: 'alishaedington',
  host: 'localhost',
  database: 'user_recipes',
  password: auth.PG_PASS,
  port: 5432,
});

pool.connect()
  .then(() => console.log('successfully connected'))
  .catch((err) => console.log('you are not connected, try again later.', err));

module.exports = pool;
