import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Context from '../context';
import UserRecipeTile from './UserRecipeTile';

export default function UserRecipeList() {
  const [userSelectedID, setUserSelectedID] = useState('');
  const [userSelectedRecipe, setUserSelectedRecipe] = useState({});
  const { userRecipes } = useContext(Context);

  function fetchUserRecipe() {
    axios
      .get(`/api/recipe?mealId=${userSelectedID}`)
      .then((results) => setUserSelectedRecipe(results.data.meals[0]))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchUserRecipe();
  }, [userSelectedID]);

  return (
    <div className="recipe-container">
      <h2>Your Recipes</h2>
      {userRecipes.map((recipe) => (
        <UserRecipeTile
          key={recipe.idmeal}
          recipe={recipe}
          userSelectedID={userSelectedID}
          setUserSelectedID={setUserSelectedID}
          userSelectedRecipe={userSelectedRecipe}
          setUserSelectedRecipe={setUserSelectedRecipe}
        />
      ))}
    </div>
  );
}
