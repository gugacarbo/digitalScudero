import styled from "styled-components";
import BackButton from "./components/BackButton";
import Logo from "./components/Logo";
import Socials from "./components/Socials";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <BackButton />
      <Socials />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 8%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  place-items: center;
`;

export default Header;
