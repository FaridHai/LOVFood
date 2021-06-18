import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import useIngredients from "./hooks/useIngredients";

export default function App() {
  const { ingredients } = useIngredients();

  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <HomePage ingredients={ingredients} />
        </Route>
        <Route path={"/recipes"} exact>
          <Recipes />
        </Route>
      </Switch>
    </Router>
  );
}
