import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import useHook from "./hooks/useHook";

export default function App() {
  const { ingredients } = useHook();

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
