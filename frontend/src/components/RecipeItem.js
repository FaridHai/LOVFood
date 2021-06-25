import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#008080",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    color: "white",
  },
});

export default function RecipeItem({ recipe }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {recipe.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            size="small"
            onClick={() => {
              history.push("/detailspage");
            }}
          >
            Zur Anleitung
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
`;
