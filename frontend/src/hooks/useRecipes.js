import axios from "axios";
import { useEffect, useState } from "react";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((response) => response.data)
      .then(setRecipes)
      .catch((error) => console.error(error));
  }, []);

  return {
    recipes,
  };
}
