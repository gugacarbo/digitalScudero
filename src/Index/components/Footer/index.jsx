import styled from "styled-components";
import Left from "./components/Left";
import Right from "./components/Right";
import Copy from "./components/Copy";
import BlogButton from "./components/BlogButton";

import { setBrightness } from "../../util/color";

function Footer() {
  return (
    <FooterContainer>
      <Left />
      <Right />
      <Copy />
      <BlogButton />
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: ${({ theme }) => setBrightness(theme.background, -20)};
  display: grid;
  grid-template-columns: 15% 20% 30% 20% 15%;
  grid-template-rows: 90% 10%;
  overflow: hidden;
  padding-top: 10vh;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 8% 30% 26% 30% 8%;
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: 5% 40% 50% 5%;
  }
`;
