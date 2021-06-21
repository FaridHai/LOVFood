import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import useIngredients from "./hooks/useIngredients";
import InitialIngredients from "./hooks/InitialIngredrients";
import FilteredRecipes from "./pages/FilteredRecipes";

export default function App() {
  const { ingredients } = useIngredients();
  const { ingredientsList, setIngredientsList } = InitialIngredients();
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <HomePage
            ingredients={ingredients}
            ingredientsList={ingredientsList}
            setIngredientsList={setIngredientsList}
          />
        </Route>
        <Route path={"/recipes"} exact>
          <Recipes />
        </Route>
        <Route path={"/filteredSearch"} exact>
          <FilteredRecipes ingredientsList={ingredientsList} />
        </Route>
      </Switch>
    </Router>
  );
}
