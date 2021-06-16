import styled from "styled-components/macro";
import { useState } from "react";

export default function AddIngredients({ onAddClick }) {
  const [ingredient, setIngredient] = useState("");

  const handeAddClick = () => {
    onAddClick(ingredient);
    setIngredient("");
  };

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Enter Ingredient"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
      />
      <button onClick={handeAddClick}>Add</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px;
  input {
    margin-right: 12px;
    flex-grow: 1;
  }
`;
