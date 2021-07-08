import Main from "../components/Main";
import RecipeList from "../components/RecipeList";
import styled from "styled-components/macro";

export default function Recipes({ recipes, loading, filteredLoading }) {
  return (
    <Main>
      <Titel>Alle Rezepte:</Titel>
      <RecipeList loading={loading} filteredLoading={filteredLoading} recipes={recipes} />
    </Main>
  );
}
const Titel = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 10%;
`;
