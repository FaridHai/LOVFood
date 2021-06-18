import axios from "axios";
import { useEffect, useState } from "react";

export default function useIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("/api/ingredients")
      .then((response) => response.data)
      .then(setIngredients)
      .catch((error) => console.error(error));
  }, []);

  return {
    ingredients,
  };
}
