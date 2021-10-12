/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import axios from 'axios';
import Context from '../context';

export default function SelectedTile({ selectedRecipe, setSelectedID, setSelectedRecipe }) {
  const {
    username, fetchUserRecipes, setShoppingList, shoppingList,
  } = useContext(Context);
  const ingredients = [];
  const measurements = [];

  const keys = Object.keys(selectedRecipe);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].indexOf('Ingredient') > -1 && selectedRecipe[keys[i]] !== '') {
      ingredients.push(selectedRecipe[keys[i]]);
    }
    if (keys[i].indexOf('Measure') > -1 && selectedRecipe[keys[i]] !== ' ') {
      measurements.push(selectedRecipe[keys[i]]);
    }
  }

  function saveToDB() {
    const {
      strMeal, strCategory, idMeal, strMealThumb, strYoutube, strArea,
    } = selectedRecipe;
    const body = {
      username, strMeal, strCategory, idMeal, strMealThumb, strArea, strYoutube,
    };
    axios
      .post('/recipes', body)
      .then(() => {
        fetchUserRecipes(username);
      })
      .catch((err) => console.log(err));
  }

  function addIngredientsToList() {
    const addItems = shoppingList.concat(ingredients);
    const unique = [...new Set(addItems)];
    setShoppingList(unique);
  }

  function collapseExpandedTile() {
    setSelectedRecipe({});
    setSelectedID('');
  }

  return (
    <div className="selected-recipe-tile">
      <div className="select-tile-upper">
        <img
          onClick={collapseExpandedTile}
          className="selected-recipe-thumb"
          src={selectedRecipe.strMealThumb}
          alt={selectedRecipe.strMeal}
        />
        <div className="description">
          <div className="recipe-name" onClick={collapseExpandedTile}>{selectedRecipe.strMeal}</div>
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
      <div className="directions">
        <div>Directions:</div>
        <div>{selectedRecipe.strInstructions}</div>
      </div>
      <div className="link-row">
        <a href={selectedRecipe.strYoutube} rel="noreferrer" target="_blank">Follow along on Youtube</a>
        <i onClick={saveToDB} className="far icon fa-heart fa-2x" />
        <i onClick={addIngredientsToList} className="fas icon fa-list fa-2x" />
      </div>
    </div>
  );
}
