import styled from "styled-components/macro";
import { useState } from "react";

export default function AddIngredients({ onAddClick }) {
  const [ingredient, setIngredient] = useState("");

  const handleAddClick = () => {
    onAddClick(ingredient);
    setIngredient("");
  };

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Zutate Eingeben"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
      />
      <button onClick={handleAddClick}>Hinzufügen</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px 24px 0px;
  input {
    margin-right: 12px;
    flex-grow: 1;
  }
`;
