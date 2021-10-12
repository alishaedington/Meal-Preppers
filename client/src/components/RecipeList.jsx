import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Context from '../context';
import RecipeTile from './RecipeTile';

export default function RecipeList() {
  const [selectedID, setSelectedID] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const { latestMeals, filtered } = useContext(Context);

  function fetchRecipe() {
    axios
      .get(`/api/recipe?mealId=${selectedID}`)
      .then((results) => setSelectedRecipe(results.data.meals[0]))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchRecipe();
  }, [selectedID]);

  return (
    <div className="recipe-container">
      <h2>Recipes</h2>
      {filtered.length > 0
        ? (
          filtered.map((recipe) => (
            <RecipeTile
              key={recipe.idMeal}
              recipe={recipe}
              selectedID={selectedID}
              setSelectedID={setSelectedID}
              selectedRecipe={selectedRecipe}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))
        )
        : (
          latestMeals.map((recipe) => (
            <RecipeTile
              key={recipe.idMeal}
              recipe={recipe}
              selectedID={selectedID}
              setSelectedID={setSelectedID}
              selectedRecipe={selectedRecipe}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))
        )}
    </div>
  );
}
