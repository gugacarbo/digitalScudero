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
  width: 65%;
  display: flex;
  justify-content: space-between;
  column-gap: 5%;
  @media (max-width: 620px) {
    column-gap: 4%;
    width: 80%;
  }
  @media (max-width: 414px) {
    column-gap: 0;
    width: 90%;
    height: auto;
    place-items: center;
    flex-wrap: wrap;
  }
`;

const IconText = styled.span`
  width: 95%;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.color.main.color};
  margin: 1rem auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    font-size: 1.1rem;
  }
  @media (max-width: 414px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

const IconBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
  place-items: center;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 414px) {
    width: 35%;
    height: auto;
    grid-template-rows: auto 5rem;
  }
`;

export default ServiceIcons;
