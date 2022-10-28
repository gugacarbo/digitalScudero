import styled from "styled-components";
import Left from "./components/Left";
import Right from "./components/Right";
import Copy from "./components/Copy";
import BlogButton from "./components/BlogButton";

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
  height: 65vh;
  background-color: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: 15% 20% 30% 20% 15%;
  grid-template-rows: 90% 10%;
  overflow: hidden;
  padding-top: 5vh;
`;
