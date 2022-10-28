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
  grid-template-rows: 40% 60%;

`;
