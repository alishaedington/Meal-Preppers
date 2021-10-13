/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from '../context';
import Modal from './Modal';
import Categories from './Categories';
import Cuisines from './Cuisines';
import RecipeList from './RecipeList';
import UserRecipeList from './UserRecipeList';
import ShoppingListModal from './ShoppingListModal';
import Header from './Header';

export default function App() {
  const [username, setUsername] = useState();
  const [latestMeals, setLatestMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [displayUserRecipes, setDisplayUserRecipes] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [showShoppingModal, setShowShoppingModal] = useState(false);

  function fetchLatest() {
    axios
      .get('/api/latest')
      .then((results) => setLatestMeals(results.data.meals))
      .catch((err) => console.log(err));
  }

  function fetchCategories() {
    axios
      .get('/api/categories')
      .then((results) => setCategories(results.data.meals))
      .catch((err) => console.log(err));
  }

  function fetchCuisines() {
    axios
      .get('/api/cuisines')
      .then((results) => setCuisines(results.data.meals))
      .catch((err) => console.log(err));
  }

  function fetchUserRecipes(username) {
    axios
      .get(`/recipes?username=${username}`)
      .then((results) => setUserRecipes(results.data))
      .catch((err) => console.log(err));
  }

  function filterRecipesCategory(category) {
    axios
      .get(`/api/categoryfilter?category=${category}`)
      .then((results) => setFiltered(results.data.meals))
      .catch((err) => console.log(err));
  }

  function filterRecipesCuisine(cuisine) {
    axios
      .get(`/api/cuisinefilter?cuisine=${cuisine}`)
      .then((results) => setFiltered(results.data.meals))
      .catch((err) => console.log(err));
  }

  function logout() {
    setUsername('');
    setShowModal(true);
  }

  useEffect(() => {
    fetchLatest();
    fetchCategories();
    fetchCuisines();
  }, []);

  if (!categories.length || !cuisines.length || !latestMeals.length) {
    return (
      <div>loading....</div>
    );
  }
  return (
    <>
      {showModal ? <div className="modal-backdrop" /> : null}
      {showShoppingModal ? <div className="modal-backdrop" onClick={() => setShowShoppingModal(false)} /> : null}

      <Context.Provider value={{
        filterRecipesCuisine,
        filterRecipesCategory,
        fetchUserRecipes,
        setShowModal,
        setUsername,
        setShoppingList,
        setShowShoppingModal,
        setDisplayUserRecipes,
        logout,
        filtered,
        showModal,
        latestMeals,
        categories,
        cuisines,
        username,
        userRecipes,
        shoppingList,
        showShoppingModal,
        displayUserRecipes
      }}
      >
        <Header />
        <ShoppingListModal />
        <Modal />
        <div className="content">
          <div className="list-container">
            <h2>Categories</h2>
            <Categories />
            <h2>Cuisines</h2>
            <Cuisines />
          </div>
          {displayUserRecipes ? <UserRecipeList /> : <RecipeList />}
        </div>
      </Context.Provider>
    </>
  );
}
