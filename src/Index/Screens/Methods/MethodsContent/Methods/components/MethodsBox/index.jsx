import styled from "styled-components";
import { Title, Text, Dots } from "../../../../../PatternPageStyled";
import { ReactComponent as PDCASvg } from "../../../../../../../assets/PDCA.svg";
import { ReactComponent as GAPASvg } from "../../../../../../../assets/GAPA.svg";
function MethodsBox() {
  return (
    <BoxContent id="MethodsContainer">
      <TextBox>
        <MethodsTitle>
          Ciclo <b>PDCA</b>
        </MethodsTitle>
        <SubTitle>Gestão de Resultados</SubTitle>
        <Dots />
        <MethodsText>
          Com o objetivo de elaborar estratégias cada vez mais acertivas e
          práticas para nossos parceiros, nós nos utilizamos do ciclo PDCA para
          descobrir os pontos fortes do seu negócio e transformá-los em padrões.
        </MethodsText>
      </TextBox>
      <PDCA>
        <PDCASvg />
      </PDCA>
      <GAPA>
        <GAPASvg />
      </GAPA>
      <TextBox>
        <MethodsTitle>
          Gestão <b>GAPA</b>
        </MethodsTitle>
        <SubTitle>Gap Analisys</SubTitle>
        <Dots />
        <MethodsText>
          A Digital Scudero se utiliza dos itens críticos analisados, e a partir
          do seu resultado cria novas abordagens para otimizar próximos
          resultados, cada caso é acompanhado como um caso único.
        </MethodsText>
      </TextBox>
    </BoxContent>
  );
}

export default MethodsBox;

const PDCA = styled.div`
  width: 70%;

  svg {
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 76%;
  }

  @media (max-width: 520px) {
    width: 85%;
  }
`;
const GAPA = styled(PDCA)`
  width: 75%;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    grid-row-end: 5;
    grid-template-columns: 100%;
    width: 75%;
  }
`;

const MethodsTitle = styled(Title)`
  width: 90%;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: 500px) {
    margin-top: 4rem;
}
`;

const MethodsText = styled.p`
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.06rem;
  width: 90%;

  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  font-weight: 400;
  text-align: center;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: ${({ theme }) => theme.color.main.color};
  }

  &::first-letter {
    margin-left: 1rem;
  }
`;

const SubTitle = styled.small`
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 768px) {
  }
`;

const ImageBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 2rem auto;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  row-gap: 10rem;

  place-items: center;
  @media (max-width: 900px) {
    row-gap: 4rem;
    width: 95%;
  }
  @media (max-width: 520px) {
    width: 97%;
  }
  @media (max-width: 500px) {
    row-gap: 2rem;

    grid-template-columns: 100%;
  }
`;
