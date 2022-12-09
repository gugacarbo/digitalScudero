import styled from "styled-components";
import { ReactComponent as DotsSvg } from "../../../../../../../assets/services/ServiceDots.svg";
import ContactButton from "./ContactButton";
import { BaseTitle } from "../../../HomeStyled";

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
`;

const Title = styled(BaseTitle)`
  color: ${({ theme }) => theme.color.black};
  margin-top: 2%;
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
  @media (max-width: 520px) {
    justify-content: space-evenly;
    height: 95%;
  }
`;

const Dots = styled(DotsSvg)`
  width: 25%;
  opacity: 0.9;
  margin-bottom: 5%;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 414px) {
    width: 85%;
    opacity: 1;
  }
`;

export default Contact;
