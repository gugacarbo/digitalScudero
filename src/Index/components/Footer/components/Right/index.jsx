import styled from "styled-components";
import Logo from "./Logo";
import Socials from "./Socials";
function Right() {
  return (
    <FooterRigth>
      <Logo />
      <Socials />
    </FooterRigth>
  );
}

export default Right;

const FooterRigth = styled.div`
  grid-column: 4/5;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
  height: 70%;
  place-items: center;
  @media screen and (max-width: 520px) {
    grid-column: 3/5;
  }
`;
