import Main from "../components/Main";
import RecipeList from "../components/RecipeList";
import styled from "styled-components/macro";

export default function FilteredRecipes({ filteredRecipes, filteredLoading}) {
  return (
    <Main>
      <Titel>Mögliche Rezepte:</Titel>
      <RecipeList filteredRecipes={filteredRecipes} filteredLoading={filteredLoading} />
    </Main>
  );
}

const Titel = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 10%;
`;
