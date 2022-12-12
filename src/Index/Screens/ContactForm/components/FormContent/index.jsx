import styled from "styled-components";
import FormContact from "./components/FormContact";
import { useParams, Navigate } from "react-router-dom";

function FormContent() {
  const { contact } = useParams();
  var TitleText = "";

  if (contact == "reuniao") {
    TitleText = (
      <>
        Agende uma reunião <b>com a gente</b>
      </>
    );
  } else if (contact == "minhaMarca") {
    TitleText = (
      <>
        Quero falar sobre <b>a minha marca</b>
      </>
    );
  } else if (contact == "duvida") {
    TitleText = (
      <>
        Quero tirar minhas <b>dúvidas</b>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
  return (
    <FormContainer>
      <Title>{TitleText}</Title>
      <FormContact />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: grid;
  width: 70%;
  height: 60%;
  margin: 3% auto;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  gap: 3rem;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 414px) {
    width: 90%;
    height: 100%;

    gap: 1rem;
    grid-template-rows: auto 1fr;

    overflow: hidden;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.1rem;
  line-height: 1.2em;
  color: ${({ theme }) => theme.color.white};
  b {
    white-space: nowrap;
    color: ${({ theme }) => theme.color.main.color};
  }
`;

export default FormContent;
