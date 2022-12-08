import styled from "styled-components";
import { ReactComponent as DotsSvg } from "../../../../../assets/services/ServiceDots.svg";
import { ReactComponent as LeftArrowsSvg } from "../../../../../assets/LeftArrows.svg";
import { Link } from "react-router-dom";
import PartnersBox from "./components/PartnersBox";
import PartnersAvaliations from "./components/PartnersAvaliations";
function ShowPartners() {
  return (
    <ShowPartnersContainer>
      <BackLink to="/">
        <LeftArrowsSvg /> Home
      </BackLink>
      <Dots />
      <PartnersBox />
      <PartnersAvaliations />
    </ShowPartnersContainer>
  );
}

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.color.main.color};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  transition: ${({ theme }) => theme.transition.slow};
  svg {
    fill: ${({ theme }) => theme.color.main.color};
    height: 1.6rem;
    transition: ${({ theme }) => theme.transition.main};
  }
  &:hover {
    color: ${({ theme }) => theme.color.main.light};
    svg {
      fill: ${({ theme }) => theme.color.main.light};
      transform: translateX(-0.5rem);
    }
  }
`;

const Dots = styled(DotsSvg)`
  width: 20%;
  opacity: 0.9;
`;

const ShowPartnersContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;

  padding: 15vh 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ShowPartners;
