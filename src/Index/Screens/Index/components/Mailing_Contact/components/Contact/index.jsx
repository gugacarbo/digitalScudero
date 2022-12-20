import styled from "styled-components";
import ContactButton from "./ContactButton";
import { BaseTitle, Dots } from "../../../HomeStyled";

function Contact() {
  return (
    <ContactContainer id="Contact">
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60%;
  place-items: center;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    height: 100%;
    flex-direction: column;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
  @media (max-width: 414px) {
    height: 100%;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 0rem;
  }
`;

const Title = styled(BaseTitle)`
  color: ${({ theme }) => theme.color.black};
  b {
    color: ${({ theme }) => theme.color.main.color};
  }
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
  @media (max-width: 520px) {
    font-size: 3.7rem;
  }
  @media (max-width: 414px) {
    margin-top: 0;
    font-size: 3rem;
  }
`;
const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  @media (max-width: 520px) {
    justify-content: space-evenly;
    height: 95%;
  }
`;

export default Contact;
