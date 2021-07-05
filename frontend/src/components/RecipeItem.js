import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import {CardActionArea} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "45%",
        backgroundColor: "#008080",
        padding: "10px",
        display: "flex",
        borderRadius: "12px",
    },
    title: {
        fontSize: 18,
        color: "white",
        margin: "auto",
        padding: "10px",
        textAlign: "center",
    },
    card: {
        display: "flex",
        padding: "10px",
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
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        </Wrapper>
    );
}
const Wrapper = styled.section`
  display: flex;  
  padding: 6px;
  width: 100%;
`;
