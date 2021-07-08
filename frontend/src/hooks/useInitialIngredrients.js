import {useState} from "react";
import axios from "axios";

export default function useInitialIngredients() {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [filteredLoading, setFilteredLoading] = useState(false);
    const [ingredientsList, setIngredientsList] = useState([
        {id: "1418", name: "Wasser"},
        {id: "1046", name: "Salz"},
        {id: "874", name: "Pfeffer"}
    ]);

    function getRecipesByIngredients(ingredientsList) {
        setFilteredLoading(true);
        axios
            .post("api/ingredients", ingredientsList)
            .then((response) => response.data)
            .then(setFilteredRecipes)
            .catch((error) => console.error(error.message))
            .finally(() => setFilteredLoading(false));
    }

    return {
        ingredientsList,
        setIngredientsList,
        getRecipesByIngredients,
        filteredRecipes,
        filteredLoading
    };
}
