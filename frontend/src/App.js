import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import useIngredients from "./hooks/useIngredients";
import FilteredRecipes from "./pages/FilteredRecipes";
import useInitialIngredients from "./hooks/useInitialIngredrients";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useState } from "react";

export default function App() {
  const { ingredients } = useIngredients();
  const { ingredientsList, setIngredientsList } = useInitialIngredients();
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
          />
        </Route>
        <Route path={"/recipes"} exact>
          <Recipes />
        </Route>
        <Route path={"/filteredSearch"} exact>
          <FilteredRecipes />
        </Route>
      </Switch>
    </Router>
  );
}
