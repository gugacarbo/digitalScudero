import { MainContainer } from "../../../../Styled";
import styled from "styled-components";
import Mailing from "./components/Mailing";
import Contact from "./components/Contact";

function Mailing_Contact() {
  return (
    <Mailing_ContactContainer bg="white" id="Mailing">
      <Mailing />
      <Contact />
    </Mailing_ContactContainer>
  );
}

const Mailing_ContactContainer = styled(MainContainer)`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 75%;

  @media (max-width: 520px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 100%;
  }
`;

export default Mailing_Contact;
