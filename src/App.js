import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "ce9be3e1";
  const APP_KEY = "838948145bcc7a3606aca6d065a8b9c2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((x) => x.json())
      .then((y) => setRecipes(y.hits) + console.log(y.hits));
    // const data = await response.json(); // Format the response into json
    // setRecipes(data.hits);
  };

  //* https://www.youtube.com/watch?v=U9T6YkEDkMo leftoff at 9.52

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault(); // prevent page from refreshing
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <div className="title-wrapper">
        <h1 className="main-title">Top 10 Recipes</h1>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, arrIndex) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            index={arrIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
