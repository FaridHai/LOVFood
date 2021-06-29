import { useState } from "react";
import axios from "axios";

export default function useInitialIngredients() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([
    "Wasser",
    "Salz",
    "Pfeffer",
  ]);

  function getRecipesByIngredients(ingredientsList) {
    axios
      .post("api/ingredients", ingredientsList)
      .then((response) => response.data)
      .then(setFilteredRecipes)
      .catch((error) => console.error(error.message));
  }

  return {
    ingredientsList,
    setIngredientsList,
    getRecipesByIngredients,
    filteredRecipes,
  };
}
