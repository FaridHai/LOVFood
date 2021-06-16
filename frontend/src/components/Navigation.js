import styled from "styled-components/macro";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Wrapper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/recipes"
          label="Recipes"
          icon={<FastfoodIcon />}
        />
      </BottomNavigation>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  justify-content: center;
`;
