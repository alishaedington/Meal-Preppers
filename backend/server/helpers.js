const axios = require('axios');
// const auth = require('../../config');

const getCategories = (request, response) => {
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/list.php?c=list`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

const getCuisineTypes = (request, response) => {
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/list.php?a=list`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

const filterByCategory = (request, response) => {
  const { category } = request.query;
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/filter.php?c=${category}`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

const filterByCuisine = (request, response) => {
  const { cuisine } = request.query;
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/filter.php?a=${cuisine}`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

const getLatest = (request, response) => {
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/latest.php`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

const getRecipe = (request, response) => {
  const { mealId } = request.query;
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/lookup.php?i=${mealId}`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

const getRandomRecipe = (request, response) => {
  axios
    .get(`http://www.themealdb.com/api/json/v2/${process.env.API_KEY}/random.php`)
    .then((results) => response.send(results.data))
    .catch((err) => console.log(err));
};

module.exports = {
  getRandomRecipe,
  getRecipe,
  getLatest,
  filterByCategory,
  getCategories,
  getCuisineTypes,
  filterByCuisine,
};
