import styled from "styled-components/macro";

export default function Header() {
  return (
    <Wrapper>
      <h1>LOVFood</h1>
      <h3>LeftOver Food Recipes</h3>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  text-align: center;
`;
