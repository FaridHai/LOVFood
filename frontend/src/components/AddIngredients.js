import styled from "styled-components/macro";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

export default function AddIngredients({
  ingredients,
  ingredientsList,
  setIngredientsList,
}) {
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClick = (event) => {
    event.preventDefault();
    const checkForDouble = ingredientsList.find(
      (element) => element === ingredient
    );
    if (checkForDouble === undefined) {
      setIngredientsList([...ingredientsList, ingredient]);
      setDescription("");
    }
  };

  const handleInputChange = (event, value) => {
    if (value !== null) {
      setDescription(value);
    }
  };
  const handleOnChange = (event, value) => {
    if (value !== null) {
      setIngredient(value);
      setDescription(value.name);
    }
  };

  return (
    <Wrapper>
      <Autocomplete
        onChange={(event, value) => handleOnChange(event, value)}
        onInputChange={(event, value) => handleInputChange(event, value)}
        id="Ingredient"
        color={"white"}
        inputValue={description}
        style={{ width: "100%" }}
        options={ingredients}
        getOptionLabel={(ingredient) => ingredient.name}
        renderInput={(params) => <TextField {...params} label="Zutaten:" />}
      />
      <BottomNavigationAction
          className="addbutton"
          color={"white"}
          disabled={!description}
          onClick={handleAddClick}
          icon={<AddIcon style={{ color: "white" }} />}
      />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  
  input {
    margin-right: 12px;
    flex-grow: 1;
  }
  button {
    background-color: #008080;
    color: white;
  }
  .addbutton {
   margin-top: 24px;
   border-radius: 12px;
   min-width: 8px;
   padding: 8px !important;
  }
`;