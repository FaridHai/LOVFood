import styled from "styled-components/macro";
import logo from "../images/LOVFoodLogo.png";

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt={"Logo"} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  text-align: center;
  padding-top: 24px;
  img {
    height: 150px;
    width: 150px;
  }
`;
