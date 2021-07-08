import styled from "styled-components/macro";
import RecipeItem from "./RecipeItem";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function RecipeList({ recipes, filteredRecipes, loading, filteredLoading }) {
  const classes = useStyles();
  return (
    <Wrapper classname={classes.root}>
      {loading && <CircularProgress />}
      {filteredLoading && <CircularProgress />}
      {filteredRecipes
        ? filteredRecipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} />
          ))
        : recipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} />
          ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 0 0 calc(16.66% - 20px);
`;
