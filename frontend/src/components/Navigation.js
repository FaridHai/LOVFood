import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation() {
  return (
    <Wrapper>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/recipes"}>Recipes</NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;
