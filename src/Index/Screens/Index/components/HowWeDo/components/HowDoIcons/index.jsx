import styled from "styled-components";

import { ReactComponent as SearchSvg } from "../../../../../../../assets/HowDoIcons/Search.svg";
import { ReactComponent as PlanSvg } from "../../../../../../../assets/HowDoIcons/Plan.svg";
import { ReactComponent as DoSvg } from "../../../../../../../assets/HowDoIcons/Do.svg";
import { ReactComponent as CheckSvg } from "../../../../../../../assets/HowDoIcons/Check.svg";

function ServiceIcons() {
  return (
    <IconsContainer>
      <IconBox>
        <SearchSvg />
        <IconText>Pesquisa</IconText>
      </IconBox>

      <IconBox>
        <PlanSvg />
        <IconText>Planejamento</IconText>
      </IconBox>
      <IconBox>
        <DoSvg />
        <IconText>Execução</IconText>
      </IconBox>
      <IconBox>
        <CheckSvg />
        <IconText>Análise de Resultados</IconText>
      </IconBox>
    </IconsContainer>
  );
}
const IconsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 620px) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const IconText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
`;

const IconBox = styled.div`
  width: 25%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 3rem;
  place-items: center;
  &:nth-child(1) {
    transform: translateX(20%);
  }
  &:nth-child(2) {
    transform: translateX(10%);
  }
  &:nth-child(3) {
    transform: translateX(-10%);
  }
  &:nth-child(4) {
    transform: translateX(-20%);
  }
  svg {
    aspect-ratio: 1;
    width: 100%;
  }
`;

export default ServiceIcons;
