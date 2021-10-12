/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import SelectedTile from './SelectedTile';

export default function RecipeTile({
  recipe, selectedID, setSelectedID, selectedRecipe, setSelectedRecipe,
}) {
  function handleClick(event) {
    const mealId = event.target.attributes[0].value;
    setSelectedID(mealId);
  }

  return (
    <>
      {recipe.idMeal === selectedID
        ? (
          <SelectedTile
            selectedRecipe={selectedRecipe}
            setSelectedID={setSelectedID}
            setSelectedRecipe={setSelectedRecipe}
          />
        )
        : (
          <div className="recipe-tile">
            <img
              value={recipe.idMeal}
              onClick={handleClick}
              className="recipe-thumb"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <div className="description">
              <div value={recipe.idMeal} onClick={handleClick} className="recipe-name">{recipe.strMeal}</div>
              <div>{recipe.strArea}</div>
              <div>{recipe.strCategory}</div>
            </div>
          </div>
        )}
    </>
  );
}
