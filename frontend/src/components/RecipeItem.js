import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import {CardActionArea, CardMedia} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "175px",
        backgroundColor: "#008080",
        borderRadius: "12px",
        webkitBoxShadow: "5px 5px 12px -7px #000000",
        boxShadow: "5px 5px 12px -7px #000000",
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
    media: {
        height: "150px",
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
                    <CardMedia
                        className={classes.media}
                        image={recipe.thumbnail}>
                    </CardMedia>
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
`;

