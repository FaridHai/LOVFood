import styled from "styled-components/macro";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";

export default function AddIngredients({
  ingredients,
  ingredientsList,
  setIngredientsList,
}) {
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");
  let checkForDouble = false;

  const handleAddClick = (event) => {
    event.preventDefault();
    for (let i = 0; i < ingredientsList.length; i++) {
      if (ingredientsList[i] === ingredient.name) {
        checkForDouble = true;
      }
    }
    if (checkForDouble === false) {
      setIngredientsList([...ingredientsList, ingredient.name]);
      setDescription("");
    }
  };

  const handleInputChange = (event, value) => {
    if (value !== null) {
      setIngredient(value);
      setDescription(value);
    }
  };

  return (
    <Wrapper onSubmit={handleAddClick}>
      <Autocomplete
        onChange={(event, value) => handleInputChange(event, value)}
        onInputChange={(event, value) => handleInputChange(event, value)}
        id="Ingredient"
        color={"white"}
        value={description}
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
