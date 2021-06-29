import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import useIngredients from "./hooks/useIngredients";
import FilteredRecipes from "./pages/FilteredRecipes";
import useInitialIngredients from "./hooks/useInitialIngredrients";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useState } from "react";
import useRecipes from "./hooks/useRecipes";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  const { recipes, recipesList, setRecipesList } = useRecipes();
  const { ingredients } = useIngredients();
  const {
    ingredientsList,
    setIngredientsList,
    getRecipesByIngredients,
    filteredRecipes,
  } = useInitialIngredients();
  const [searchClicked, setSearchClicked] = useState();
  return (
    <Router>
      <Header />
      <Navigation searchedClicked={searchClicked} />
      <Switch>
        <Route path={"/"} exact>
          <HomePage
            ingredients={ingredients}
            ingredientsList={ingredientsList}
            setIngredientsList={setIngredientsList}
            setSearchClicked={setSearchClicked}
            getRecipesByIngredients={getRecipesByIngredients}
          />
        </Route>
        <Route path={"/recipes"} exact>
          <Recipes
            recipes={recipes}
            recipesList={recipesList}
            setRecipesList={setRecipesList}
          />
        </Route>
        <Route path={"/filteredSearch"} exact>
          <FilteredRecipes
            ingredientsList={ingredientsList}
            recipes={recipes}
            filteredRecipes={filteredRecipes}
          />
        </Route>
        <Route path={"/detailspage"} exact>
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}
