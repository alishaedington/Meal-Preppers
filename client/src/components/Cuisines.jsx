import React, { useContext } from 'react';
import Context from '../context';

export default function Categories() {
  const { cuisines, filterRecipesCuisine } = useContext(Context);

  function handleClick(event) {
    filterRecipesCuisine(event.target.innerHTML);
  }

  return (
    <ul className="column-list">
      {cuisines.map((cuisine) => (
        <li
          key={cuisine.strArea}
          value={cuisine.strArea}
          onClick={handleClick}
          className="list-items"
        >
          {cuisine.strArea}
        </li>
      ))}
    </ul>
  );
}
