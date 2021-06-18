import styled from "styled-components/macro";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";

export default function AddIngredients({ ingredients }) {
  const [ingredient, setIngredient] = useState("");

  const handleAddClick = () => {
    setIngredient("");
  };

  const handleInputChange = (event, value) => {
    if (value !== null) {
      setIngredient(value);
    }
  };

  return (
    <Wrapper>
      <Autocomplete
        onChange={(event, value) => handleInputChange(event, value)}
        onInputChange={(event, value) => handleInputChange(event, value)}
        id="Ingredient"
        freeSolo
        color={"white"}
        style={{ width: "100%" }}
        options={ingredients}
        getOptionLabel={(ingredient) => ingredient.name}
        renderInput={(params) => <TextField {...params} label="Zutate:" />}
      />
      {/*<input type="text" placeholder="Zutate Eingeben" value={ingredient} onChange={(event) => setIngredient(event.target.value)}/>*/}
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
