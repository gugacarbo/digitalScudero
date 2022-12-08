import styled from "styled-components";
import { ReactComponent as DotsSvg } from "../../../../../../../assets/services/ServiceDots.svg";
import ContactButton from "./ContactButton";
function Contact() {
  return (
    <ContactContainer>
      <Title>
        Entre em <b>Contato</b>
      </Title>
      <Dots />
      <ButtonsContainer>
        <ContactButton to="/contato/minhaMarca">
          Quero conversar sobre minha marca
        </ContactButton>
        <ContactButton to="/contato/duvida" black={1}>
          Quero tirar minhas dúvidas
        </ContactButton>
      </ButtonsContainer>
    </ContactContainer>
  );
}

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 60%;
  place-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.black};
  margin-top: 5%;
  b {
    color: ${({ theme }) => theme.color.main.color};
  }
`;
const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Dots = styled(DotsSvg)`
  width: 25%;
  opacity: 0.5;
  margin-bottom: 5%;
  margin-top: 1rem;
`;

export default Contact;
