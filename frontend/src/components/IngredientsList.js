import styled from "styled-components/macro";
import IngredientItem from "./IngredientItem";

export default function IngredientsList({ ingredients }) {
  return (
    <Wrapper>
      <div>
        {/*{ingredients.map((ingredient, index) => (*/}
        {/*  <IngredientItem*/}
        {/*    key={index}*/}
        {/*    ingredient={ingredient}*/}
        {/*    removeIngredient={removeIngredient}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;
