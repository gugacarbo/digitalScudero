import styled from "styled-components";
import MailingForm from "./MailingForm";

function Mailing() {
  return (
    <MailingContainer>
      <MailingTextContainer>
        <MailingTitle>Assine nossa Newsletter</MailingTitle>
        <MailingText>
          Assine nossa newsletter e receba com atecedência avisos promocionais,
          ofertas, ações, dicas de marketing e muito mais!
        </MailingText>
      </MailingTextContainer>
      <MailingFormContainer>
        <MailingForm />
      </MailingFormContainer>
    </MailingContainer>
  );
}

export default Mailing;

const MailingContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: grid;
  grid-template-columns: 10% 35% 45% 10%;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.color.main.color};

  grid-template-areas: ". MailingText  MailingForm .";

  @media screen and (max-width: 1200px) {
    grid-template-columns: 2.5% 40% 55% 2.5%;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 2.5% 40% 55% 2.5%;
  }

  @media screen and (max-width: 720px) {
    padding-top: 4rem;
  }
  @media (max-width: 520px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: 5% 90% 5%;
    row-gap: 1rem;
    padding-bottom: 3rem;
    grid-template-areas:
      ". MailingText ."
      ". MailingForm .";
    padding-top: 6rem;
  }
  @media (max-width: 414px) {
    padding-bottom: 1rem;
  }
  @media screen and (max-width: 360px) {
    padding-top: 3.2rem;
  }
`;

const MailingTextContainer = styled.div`
  grid-area: MailingText;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: #333; */
`;

const MailingTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: 520px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 360px) {
  font-weight: 600;
    font-size: 2.5rem;
  }
`;

const MailingText = styled.p`
  font-size: 1.2rem;
  margin-right: 2rem;
  color: ${({ theme }) => theme.color.white};
  margin-top: 2rem;
  font-weight: 400;
  @media (max-width: 414px) {
    font-size: 1.3rem;
    margin-top: 0;
    margin-left: 1rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 1.3rem;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

const MailingFormContainer = styled.div`
  grid-area: MailingForm;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
