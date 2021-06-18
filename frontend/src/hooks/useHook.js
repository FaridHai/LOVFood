import axios from "axios";
import { useEffect, useState } from "react";

export default function useHook() {
  const [ingredients, setIngredients] = useState([]);

  const addNewIngredients = (name) => {
    // axios;
    // .post("/api/ingredients", { name })
    // .then((response) => response.data)
    // .then((newIngredient) => setIngredients([...ingredients, newIngredient]))
    // .catch((error) => console.error(error));
  };

  const removeIngredient = (ingredient) => {
    // axios
    //   .delete("/api/ingredients/" + ingredient)
    //   .then(window.location.reload())
    //   .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("/api/ingredients")
      .then((response) => response.data)
      .then((ingredients) => setIngredients(ingredients))
      .catch((error) => console.error(error));
  }, []);

  return {
    ingredients,
    addNewIngredients,
    removeIngredient,
  };
}
