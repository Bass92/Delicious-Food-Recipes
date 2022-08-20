import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (data) => {
    setRecipes([...recipes, data]); // This function is used to add receipe, useing setRecipes then adding the data.
  };

  function deleteRecipe(targetIndex) {
    //This Function is used to Deletes recipe using the filter method.
    setRecipes(recipes.filter((_, index) => index !== targetIndex));
  }

  // Added the ability for the <RecipeList /> component to list and delete an existing recipe.
  // Added the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;