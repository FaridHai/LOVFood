import styled from "styled-components/macro";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Recipes() {
  return (
    <Wrapper>
      <Header />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  *:not(img):not(a) {
    margin: 10px;
  }
`;
