import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path={"/recipes"} exact>
          <Recipes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
