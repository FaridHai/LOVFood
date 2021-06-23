import Page from "../components/Page";
import RecipeList from "../components/RecipeList";
import styled from "styled-components/macro";

export default function Recipes({ recipes }) {
  return (
    <Page>
      <Titel>Alle Rezepte:</Titel>
      <RecipeList recipes={recipes} />
    </Page>
  );
}
const Titel = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 10%;
`;
