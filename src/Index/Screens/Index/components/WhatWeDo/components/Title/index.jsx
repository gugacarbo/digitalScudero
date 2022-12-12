import styled from "styled-components";
import { BaseTitle } from "../../../HomeStyled";

function Title() {
  return (
    <TitleContainer>
      <TitleH1>
        O Que <b>Fazemos</b>?
      </TitleH1>
      <SubTitle> Consultoria de Marketing / Posicionamento de Marca</SubTitle>
    </TitleContainer>
  );
}
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleH1 = styled(BaseTitle)`
  margin-top: 2rem;

 
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.051rem;
  font-weight: 300;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 95%;
`;

export default Title;
