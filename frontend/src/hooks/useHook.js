import axios from "axios";
import { useEffect, useState } from "react";

export default function useHook() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("/api/ingredients")
      .then((response) => response.data)
      .then((ingredients) => setIngredients(ingredients))
      .catch((error) => console.error(error));
  }, []);

  return {
    ingredients,
  };
}
