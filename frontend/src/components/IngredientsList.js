import styled from "styled-components/macro";
import IngredientItem from "./IngredientItem";

export default function IngredientsList({
  ingredientsList,
  setIngredientsList,
}) {
  return (
    <Wrapper>
      {ingredientsList.map((ingredient, index) => (
        <IngredientItem
          key={index}
          ingredient={ingredient}
          ingredientsList={ingredientsList}
          setIngredientsList={setIngredientsList}
        />
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
