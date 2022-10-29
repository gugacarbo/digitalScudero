import styled from "styled-components";
import FormContact from "./components/FormContact";
import { useParams, Navigate } from "react-router-dom";

function FormContent() {
  const { contact } = useParams();
  var TitleText = "";

  if (contact == "reuniao") {
    TitleText = (
      <span>
        Agende uma reunião <b>com a gente</b>
      </span>
    );
  } else if (contact == "minhaMarca") {
    TitleText = (
      <span>
        Quero falar sobre <b>a minha marca</b>
      </span>
    );
  } else if (contact == "duvida") {
    TitleText = (
      <span>
        Quero tirar minhas <b>dúvidas</b>
      </span>
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
`;

const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.color.white};
  b {
    color: ${({ theme }) => theme.color.main.color};
  }
`;

export default FormContent;
