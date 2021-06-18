import { useState } from "react";

export default function InitialIngredients() {
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
