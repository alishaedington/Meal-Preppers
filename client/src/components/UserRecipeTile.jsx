/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import UserSelectedTile from './UserSelectedTile';

export default function UserRecipeTile({
  recipe, userSelectedID, setUserSelectedID, userSelectedRecipe, setUserSelectedRecipe,
}) {
  function handleClick(event) {
    const mealId = event.target.attributes[0].value;
    setUserSelectedID(mealId);
  }

  return (
    <>
      {recipe.idmeal === Number(userSelectedID)
        ? (
          <UserSelectedTile
            userSelectedRecipe={userSelectedRecipe}
            setUserSelectedRecipe={setUserSelectedRecipe}
            setUserSelectedID={setUserSelectedID}
          />
        )
        : (
          <div className="recipe-tile">
            <img
              value={recipe.idmeal}
              onClick={handleClick}
              className="recipe-thumb"
              src={recipe.strmealthumb}
              alt={recipe.strmeal}
            />
            <div className="description">
              <div value={recipe.idmeal} onClick={handleClick} className="recipe-name">{recipe.strmeal}</div>
              <div>{recipe.strarea}</div>
              <div>{recipe.strcategory}</div>
            </div>
          </div>
        )}
    </>
  );
}
