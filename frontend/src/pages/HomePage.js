import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AddIngredients from "../components/AddIngredients";
import Page from "../components/Page";
import IngredientsList from "../components/IngredientsList";
import styled from "styled-components/macro";
import { useState } from "react";

export default function HomePage({ ingredients }) {
  const [ingredientsList, setIngredientsList] = useState([
    "Wasser",
    "Salz",
    "Pfeffer",
  ]);
  return (
    <Page>
      <Header />
      <Navigation />
      <AddIngredients
        setIngredientsList={setIngredientsList}
        ingredients={ingredients}
      />
      <Titel>
        <h4>Deine Zutaten:</h4>
      </Titel>
      <IngredientsList ingredientsList={ingredientsList} />
    </Page>
  );
}

const Titel = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 10%;
  h4 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
