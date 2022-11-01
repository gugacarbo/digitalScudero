import styled from "styled-components";

import { ReactComponent as SearchSvg } from "../../../../assets/services/Search.svg";
import { ReactComponent as WwwSvg } from "../../../../assets/services/Www.svg";
import { ReactComponent as FbIgSvg } from "../../../../assets/services/FbIg.svg";
import { ReactComponent as PenSvg } from "../../../../assets/services/Pen.svg";
import { ReactComponent as PrinterSvg } from "../../../../assets/services/Printer.svg";
function Services() {
  return (
    <Container>
      <ServiceBox>
        <ServiceIcon>
          <SearchSvg />
        </ServiceIcon>
        <ServiceTitle>Marketing de Busca</ServiceTitle>
        <ServiceText>
          Desenvolvemos estratégas sólidas e personalizadas, para colocar sua
          marca no topo dos buscadores. Para atingirmos o melhor resultado
          possível, nossas estratégias são constantemente revisadas baseadas na
          <b> análise de resultados</b> e aplicadas em poderosas ferramentas de
          gestão <b>ferramentas de gestão</b>.
        </ServiceText>
      </ServiceBox>
      <ServiceBox>
        <ServiceIcon>
          <WwwSvg />
        </ServiceIcon>
        <ServiceTitle>Desenvolvimento de Websites</ServiceTitle>
        <ServiceText>
          Desenvolvemos websites e webapps com a finalidade de proporcionar a
          você <b>presença na internet</b> bem como uma ferramenta poderosa,
          para<b> aumentar suas vendas</b> e facilitar o contato entre você e
          seu cliente. Nossos websites te ajudam a monitorar{" "}
          <b>informações estratégicas</b> e assim ter uma gestão mais eficaz do
          seu negócio no meio digital.
        </ServiceText>
      </ServiceBox>
      <ServiceBox>
        <ServiceIcon>
          <FbIgSvg />
        </ServiceIcon>
        <ServiceTitle>Gestão de Mídias Sociais</ServiceTitle>
        <ServiceText>
          Estar presente nas mídias sociais é reforçar a sua presença e o seu
          posicionamento no meio digital. É por meio delas que sua empresa se
          comunica com seu público de forma horizontal. Com base em
          <b> análise de resultados</b>, desenvolvemos e executamos estratégias
          para <b>alavancar suas vendas</b> nas mídias sociais.
        </ServiceText>
      </ServiceBox>
      <ServiceBox>
        <ServiceIcon>
          <PenSvg />
        </ServiceIcon>
        <ServiceTitle>Branding</ServiceTitle>
        <ServiceText>
          Desenvolvemos a <b>identidade visual</b> da sua empresa com o intuito
          de deixar claro seus valores e a cultura da sua empresa. Desenvovlemos
          e documentamos os valores e a cultura de sua empresa de forma que seu
          cliente conheça, se identifique e se torne um{" "}
          <b>defensor da sua marca</b>.
        </ServiceText>
      </ServiceBox>
      <ServiceBox>
        <ServiceIcon>
          <PrinterSvg />
        </ServiceIcon>
        <ServiceTitle>Impressos</ServiceTitle>
        <ServiceText>
          Desenvolvemos <b>arte</b> e impressão de materiais impressos como{" "}
          <b>cartões de visita</b>, flyers, cardápios e muito mais!
        </ServiceText>
      </ServiceBox>
    </Container>
  );
}

const ServiceBox = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 20% 80%;
  grid-template-areas:
    "icon title"
    "icon text";
`;
const ServiceTitle = styled.h1`
  grid-area: title;
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.main.color};
`;
const ServiceIcon = styled.div`
  grid-area: icon;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 0.001rem;
    height: 0.0011rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.main.color};
    box-shadow: 0 0 5em 2.5rem ${({ theme }) => theme.color.main.color};
  }
  svg {
    width: 100%;
    height: 100%;
    .SVG_ServicesMarketing4 {
      stroke: ${({ theme }) => theme.background};
    }
    .SVG_wwwIcon2 {
      display: none;
    }
    circle {
      display: none;
    }
    path {
    }
  }
`;
const ServiceText = styled.p`
  grid-area: text;
  font-size: 1.2rem;
  letter-spacing: 0.08rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  text-align: justify;
  margin-top: 1rem;
  b {
    color: ${({ theme }) => theme.color.main.color};
    font-weight: 500;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 6rem;
`;

export default Services;
