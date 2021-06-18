import styled from "styled-components/macro";
import IngredientItem from "./IngredientItem";

export default function IngredientsList({ ingredientsList }) {
  console.log(ingredientsList);
  return (
    <Wrapper>
      {ingredientsList.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  flex-direction: row;
  flex-wrap: wrap;
`;
