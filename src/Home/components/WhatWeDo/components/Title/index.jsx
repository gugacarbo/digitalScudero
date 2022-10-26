import styled from "styled-components";

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
const TitleH1 = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.1rem;
  font-weight: 500;
  b {
    font-size: 3.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.main.color};
  }
`;

const SubTitle = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.051rem;
  font-weight: 300;
  margin: 1rem 0;
`;

export default Title;
