import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#008080",
        padding: "10px",
        display: "flex",
        borderRadius: "12px",
    },
    title: {
        fontSize: 14,
        color: "white",
        margin: "auto",
        padding: "10px",
    },
    card: {
        display: "flex",
        padding:  "10px",
    },
});

export default function RecipeItem({recipe}) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Wrapper>
            <Card
                className={classes.root}
                onClick={() => {
                history.push({
                    pathname: "/detailspage",
                    state: recipe,
                });
            }}>
                <CardContent className={classes.card}>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                    {recipe.thumbnail && <img src={recipe.thumbnail} alt="no preview"/>}
                    </Typography>
                </CardContent>
                <CardContent className={classes.card}>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {recipe.title}
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper>
    );
}
const Wrapper = styled.section`
  display: flex;  
  padding: 6px;
  width: 100%;
`;
