import axios from "axios";
import { useEffect, useState } from "react";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/recipes")
      .then((response) => response.data)
      .then(setRecipes)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    recipes, loading
  };
}
