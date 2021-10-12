// need to pull in pool here.
const pool = require('../database');

const getUserRecipes = async (request, response) => {
  const { username } = request.query;
  let client;

  try {
    client = await pool.connect();
    const res = await client.query('SELECT * FROM recipes WHERE user_id = (SELECT id FROM users WHERE username = $1)', [username]);
    response.send(res.rows);
  } catch (err) {
    response.sendStatus(404);
  } finally {
    client.release();
  }
};

const addUserRecipe = async (request, response) => {
  console.log(request.body);
  const {
    username, strMeal, strCategory, idMeal, strMealThumb, strYoutube, strArea,
  } = request.body;

  let client;

  try {
    client = await pool.connect();
    await client.query('BEGIN');
    const userQuery = 'INSERT INTO users (username) values ($1) ON CONFLICT (username) DO NOTHING';
    const userParams = [username];
    await client.query(userQuery, userParams);
    const recipeQuery = 'INSERT INTO recipes (user_id, strmeal, strcategory, idmeal, strmealthumb, stryoutube, strarea) VALUES ((SELECT id FROM users WHERE username = $1), $2, $3, $4, $5, $6, $7)';
    const recipeParam = [username, strMeal, strCategory, idMeal, strMealThumb, strYoutube, strArea];
    await client.query(recipeQuery, recipeParam);
    await client.query('COMMIT');
    response.sendStatus(201);
  } catch (err) {
    await client.query('ROLLBACK');
    console.log(err);
    response.sendStatus(500);
  } finally {
    client.release();
  }
};

const deleteUserRecipe = async (request, response) => {
  const { username, idMeal } = request.query;
  let client;

  try {
    client = await pool.connect();
    await client.query('DELETE FROM recipes WHERE user_id = (SELECT id FROM users WHERE username = $1) AND idmeal = $2', [username, idMeal]);
    response.sendStatus(204);
  } catch (err) {
    response.sendStatus(500);
  } finally {
    client.release();
  }
};

module.exports = {
  getUserRecipes,
  addUserRecipe,
  deleteUserRecipe,
};
