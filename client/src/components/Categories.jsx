import React, { useContext } from 'react';
import Context from '../context';

export default function Categories() {
  const { categories, filterRecipesCategory } = useContext(Context);

  function handleClick(event) {
    filterRecipesCategory(event.target.innerHTML);
  }

  return (
    <ul className="column-list">
      {categories.map((category) => (
        <li
          key={category.strCategory}
          value={category.strCategory}
          onClick={handleClick}
          className="list-items"
        >
          {category.strCategory}
        </li>
      ))}
    </ul>
  );
}
