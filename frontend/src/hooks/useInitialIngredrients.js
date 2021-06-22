import { useState } from "react";

export default function useInitialIngredients() {
  const [ingredientsList, setIngredientsList] = useState([
    "Wasser",
    "Salz",
    "Pfeffer",
  ]);
  return {
    ingredientsList,
    setIngredientsList,
  };
}
