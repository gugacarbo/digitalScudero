import styled from "styled-components";

import { ReactComponent as SearchSvg } from "../../../../../../../assets/services/Search.svg";
import { ReactComponent as PenSvg } from "../../../../../../../assets/services/Pen.svg";
import { ReactComponent as WwwSvg } from "../../../../../../../assets/services/Www.svg";
import { ReactComponent as FbIgSvg } from "../../../../../../../assets/services/FbIg.svg";

function ServiceIcons() {
  return (
    <IconsContainer>
      <IconBox>
        <SearchSvg />
        <IconText>Marketing de Busca</IconText>
      </IconBox>

      <IconBox>
        <WwwSvg />
        <IconText>Desenvolvimento de Websites</IconText>
      </IconBox>
      <IconBox>
        <FbIgSvg />
        <IconText>Gestão de Mídias Sociais</IconText>
      </IconBox>
      <IconBox>
        <PenSvg />
        <IconText>Branding</IconText>
      </IconBox>
    </IconsContainer>
  );
}
const IconsContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;

const IconText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.color.main.color};
  margin: 1rem auto;
  margin-bottom: auto;
`;

const IconBox = styled.div`
  width: 18%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
  place-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default ServiceIcons;
