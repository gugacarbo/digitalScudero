import { MainContainer } from "../../Styled";
import styled from "styled-components";
import Mailing from "./components/Mailing";
import Contact from "./components/Contact";

function Mailing_Contact() {
  return (
    <Mailing_ContactContainer bg="white">
      <Mailing />
      <Contact />
    </Mailing_ContactContainer>
  );
}

const Mailing_ContactContainer = styled(MainContainer)`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 75%;
`;

export default Mailing_Contact;
