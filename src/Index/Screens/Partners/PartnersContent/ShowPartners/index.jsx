import styled from "styled-components";
import { ReactComponent as LeftArrowsSvg } from "../../../../../assets/LeftArrows.svg";
import PartnersBox from "./components/PartnersBox";
import PartnersAvaliations from "./components/PartnersAvaliations";

import { BackLink, Dots } from "../../../PatternPageStyled";

function ShowPartners() {
  return (
    <ShowPartnersContainer id="PartnersContainer">
      <BackLink to="/">
        <LeftArrowsSvg /> Home
      </BackLink>
      <Dots />
      <PartnersBox />
      <PartnersAvaliations />
    </ShowPartnersContainer>
  );
}

const ShowPartnersContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  gap: 3rem;
  padding: 10vh 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ShowPartners;
