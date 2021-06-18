import styled from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

export default function IngredientItem({ ingredient }) {
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

  const handleDelete = () => {
    removeIngredient(ingredient.name);
  };

  return (
    <Wrapper className={classes.root}>
      <Chip label={ingredient.name} onDelete={handleDelete} />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px;
`;
