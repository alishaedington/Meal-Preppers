const router = require('express').Router();
const queries = require('./queries');
const helpers = require('./helpers');

// API requests
router.get('/api/categories', helpers.getCategories);
router.get('/api/cuisines', helpers.getCuisineTypes);
router.get('/api/categoryfilter', helpers.filterByCategory);
router.get('/api/cuisinefilter', helpers.filterByCuisine);
router.get('/api/latest', helpers.getLatest);
router.get('/api/recipe', helpers.getRecipe);
router.get('/api/random', helpers.getRandomRecipe);

// DB queries
router.get('/recipes', queries.getUserRecipes);
router.post('/recipes', queries.addUserRecipe);
router.delete('/recipes', queries.deleteUserRecipe);

module.exports = router;
