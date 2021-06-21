import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AddIngredients from "../components/AddIngredients";
import Page from "../components/Page";
import { useHistory } from "react-router-dom";
import IngredientsList from "../components/IngredientsList";
import styled from "styled-components/macro";
import { Button } from "@material-ui/core";

export default function HomePage({
  ingredients,
  ingredientsList,
  setIngredientsList,
}) {
  const history = useHistory();
  return (
    <Page>
      <Header />
      <Navigation />
      <AddIngredients
        ingredients={ingredients}
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
      />
      <Titel>
        <h4>Deine Zutaten:</h4>
      </Titel>
      <IngredientsList
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
      />
      <Button
        variant="contained"
        onClick={() => history.push("/filteredSearch")}
      >
        Search
      </Button>
    </Page>
  );
}

const Titel = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 10%;
`;
