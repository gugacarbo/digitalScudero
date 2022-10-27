import styled from "styled-components";

import { ReactComponent as SearchSvg } from "../../../../../assets/HowDoIcons/Search.svg";
import { ReactComponent as PlanSvg } from "../../../../../assets/HowDoIcons/Plan.svg";
import { ReactComponent as DoSvg } from "../../../../../assets/HowDoIcons/Do.svg";
import { ReactComponent as CheckSvg } from "../../../../../assets/HowDoIcons/Check.svg";

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
  width: 45%;
  justify-content: space-between;
`;

const IconText = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  margin: 1rem auto;
  margin-bottom: auto;
`;

const IconBox = styled.div`
  width: 25%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
  place-items: center;
  svg {
    width: 115%;
    height: 115%;
  }
`;

export default ServiceIcons;
