import styled from "styled-components/macro";
import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }) {
  return (
    <Wrapper>
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
