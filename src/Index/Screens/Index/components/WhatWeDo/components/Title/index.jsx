import styled from "styled-components";
import { BaseTitle } from "../../../HomeStyled";

function Title() {
  return (
    <TitleContainer>
      <TitleH1>
        O Que <b>Fazemos</b>?
      </TitleH1>
      <SubTitle>
        <span>Consultoria de Marketing /</span>
        <span> Posicionamento de Marca</span>
      </SubTitle>
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
  margin-bottom: -0.5rem;

  @media (max-width: 414px) {
  }
  @media (max-width: 380px) {
  }
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.051rem;
  font-weight: 300;
  text-align: center;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  span {
    flex: 1;
    width: fit-content;
    white-space: nowrap;
  }
`;

export default Title;
