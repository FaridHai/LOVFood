import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components/macro";

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
    color: "white",
  },
  text: {
    marginBottom: 12,
    color: "white",
  },
  button: {
    color: "white",
  },
});

export default function DetailsPage() {
  const location = useLocation();
  const nav = useHistory();
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardContent>
          <Titel>Titel:</Titel>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {location.state.title}
          </Typography>
          <Titel>Zutaten:</Titel>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {location.state.ingredients
              .map(function (ingredient) {
                return ingredient["name"];
              })
              .join(", ")}
          </Typography>
          <Titel>Anleitung:</Titel>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.instruction}
          </Typography>
          <Titel>Dauer:</Titel>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.duration}
          </Typography>
          <Titel>Schwierigkeit:</Titel>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.level}
          </Typography>
          <Titel>Portion:</Titel>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.portion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            size="small"
            onClick={() => {
              nav.goBack();
            }}
          >
            Zurück
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
  width: 94%;
`;

const Titel = styled.h4`
  display: flex;
  margin-top: 20px;
  height: 10%;
  color: white;
`;
