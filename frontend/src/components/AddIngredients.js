import styled from "styled-components/macro";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";

export default function AddIngredients({ ingredients, setIngredientsList }) {
  const [ingredient, setIngredient] = useState("");

  const handleAddClick = (event) => {
    event.preventDefault();
    setIngredientsList((ingredientsList) => [
      ...ingredientsList,
      ingredient.name,
    ]);
  };

  const handleInputChange = (event, value) => {
    if (value !== null) {
      setIngredient(value);
    }
  };

  return (
    <Wrapper onSubmit={handleAddClick}>
      <Autocomplete
        onChange={(event, value) => handleInputChange(event, value)}
        onInputChange={(event, value) => handleInputChange(event, value)}
        id="Ingredient"
        color={"white"}
        style={{ width: "100%" }}
        options={ingredients}
        getOptionLabel={(ingredient) => ingredient.name}
        renderInput={(params) => <TextField {...params} label="Zutate:" />}
      />
      <button disabled={!ingredient}>Hinzufügen</button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  padding: 24px 24px 0px;
  input {
    margin-right: 12px;
    flex-grow: 1;
  }
`;
