import styled from "styled-components";
import Copy from "./components/Copy";

function Footer() {
  return (
    <FooterContainer>
      <Copy />
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: 10% 20% 30% 20% 10%;
  grid-template-rows: 90% 10%;
`;
