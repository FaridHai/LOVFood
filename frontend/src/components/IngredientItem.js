import styled from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

export default function IngredientItem({
  ingredient,
  ingredientsList,
  setIngredientsList,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  }));

  const classes = useStyles();

  const handleDelete = (event) => {
    event.preventDefault();

    setIngredientsList(
      ingredientsList.filter((ing) => {
        return ing !== ingredient;
      })
    );
  };

  return (
    <Wrapper className={classes.root}>
      <Chip label={ingredient} onDelete={handleDelete} />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 5px;
  width: 150px;
  height: 25px;
`;
