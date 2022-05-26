DROP DATABASE IF EXISTS user_recipes;

CREATE DATABASE user_recipes;

\c user_recipes;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  strMeal TEXT NOT NULL,
  strCategory TEXT,
  idMeal INT NOT NULL,
  strMealThumb TEXT,
  strArea TEXT,
  strYoutube TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE INDEX idx_user_id ON recipes (user_id);
CREATE INDEX idx_user_name ON users (username);
