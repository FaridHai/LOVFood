import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

export default function Search({
  ingredientsList,
  setSearchClicked,
  getRecipesByIngredients,
}) {
  const history = useHistory();
  return (
    <Wrapper>
      <Button
        style={{ color: "white" }}
        variant="contained"
        onClick={() => {
          setSearchClicked(true);
          getRecipesByIngredients(ingredientsList);
          history.push("/filteredSearch");
        }}
        disabled={ingredientsList.length < 4}
      >
        Suchen
      </Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-rows: min-content min-content min-content min-content 1fr;
  Button {
    background-color: #008080;
  }
`;
