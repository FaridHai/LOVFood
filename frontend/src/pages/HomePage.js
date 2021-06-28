import AddIngredients from "../components/AddIngredients";
import Main from "../components/Main";
import IngredientsList from "../components/IngredientsList";
import styled from "styled-components/macro";
import Search from "../components/Search";

export default function HomePage({
  ingredients,
  ingredientsList,
  setIngredientsList,
  setSearchClicked,
  getRecipesByIngredients,
}) {
  return (
    <Main>
      <AddIngredients
        ingredients={ingredients}
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
      />
      <Titel>Deine Zutaten:</Titel>
      <IngredientsList
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
      />
      <Search
        ingredientsList={ingredientsList}
        setSearchClicked={setSearchClicked}
        getRecipesByIngredients={getRecipesByIngredients}
      />
    </Main>
  );
}

const Titel = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 10%;
  padding: 5px;
`;
