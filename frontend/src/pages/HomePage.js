import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AddIngredients from "../components/AddIngredients";
import Page from "../components/Page";
import IngredientsList from "../components/IngredientsList";
import styled from "styled-components/macro";

export default function HomePage({
  ingredients,
  addnewIngredients,
  removeIngredient,
}) {
  return (
    <Page>
      <Header />
      <Navigation />
      <AddIngredients onAddClick={addnewIngredients} />
      <Titel>
        <h4>Your Ingredients:</h4>
      </Titel>
      <IngredientsList
        ingredients={ingredients}
        removeIngredient={removeIngredient}
      />
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
