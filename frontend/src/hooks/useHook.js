import axios from "axios";
import { useEffect, useState } from "react";

export default function useHook() {
  const [ingredients, setIngredients] = useState([]);

  const addNewIngredients = (ingredients) => {
    axios
      .post("/", { ingredients })
      .then((response) => response.data)
      .then((newIngredient) => setIngredients([...ingredients, newIngredient]))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("/")
      .then((response) => response.data)
      .then((ingredients) => setIngredients(ingredients))
      .catch((error) => console.error(error));
  }, []);

  return {
    ingredients,
    addNewIngredients,
  };
}
