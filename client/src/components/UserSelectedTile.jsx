/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import axios from 'axios';
import Context from '../context';

export default function UserSelectedTile({
  userSelectedRecipe, setUserSelectedID, setUserSelectedRecipe,
}) {
  const {
    shoppingList, setShoppingList, username, fetchUserRecipes,
  } = useContext(Context);
  const ingredients = [];
  const measurements = [];

  const keys = Object.keys(userSelectedRecipe);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].indexOf('Ingredient') > -1 && userSelectedRecipe[keys[i]] !== '') {
      ingredients.push(userSelectedRecipe[keys[i]]);
    }
    if (keys[i].indexOf('Measure') > -1 && userSelectedRecipe[keys[i]] !== ' ') {
      measurements.push(userSelectedRecipe[keys[i]]);
    }
  }

  function addIngredientsToList() {
    const addItems = shoppingList.concat(ingredients);
    const unique = [...new Set(addItems)];
    setShoppingList(unique);
  }

  function deleteRecipeFromDB() {
    const { idMeal } = userSelectedRecipe;
    axios
      .delete(`/recipes?username=${username}&idMeal=${idMeal}`)
      .then(fetchUserRecipes(username))
      .catch((err) => console.log(err));
  }

  function collapseExpandedTile() {
    setUserSelectedRecipe({});
    setUserSelectedID('');
  }

  return (
    <div className="selected-recipe-tile">
      <div className="select-tile-upper">
        <img
          onClick={collapseExpandedTile}
          className="selected-recipe-thumb"
          src={userSelectedRecipe.strMealThumb}
          alt={userSelectedRecipe.strMeal}
        />
        <div className="description">
          <div className="recipe-name" onClick={collapseExpandedTile}>{userSelectedRecipe.strMeal}</div>
          <div>Ingredients:</div>
          <div className="ingredients">
            <ul className="recipe-list">
              {ingredients.map((item) => <li>{item}</li>)}
            </ul>
            <ul className="recipe-list">
              {measurements.map((item) => <li>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div>Directions:</div>
      <div>{userSelectedRecipe.strInstructions}</div>
      <div className="link-row">
        <a href={userSelectedRecipe.strYoutube} rel="noreferrer" target="_blank">Follow along on Youtube</a>
        <i onClick={addIngredientsToList} className="fas icon fa-list fa-2x" />
        <i onClick={deleteRecipeFromDB} className="fas fa-trash-alt fa-2x" />
      </div>
    </div>
  );
}
