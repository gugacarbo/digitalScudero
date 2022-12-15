import styled from "styled-components";
import Socials from "../../../../components/Socials";
import { Link } from "react-router-dom";

import {
  ArrowDown,
  Dots,
  Text,
  Title,
  Logo,
  PatternPageContainer,
  PatterPageBox,
} from "../../../PatternPageStyled";

import { Link as ScrollLink } from "react-scroll";

function PartnersHome() {
  return (
    <PartnersHomeContainer id="PartnersHome">
      <Socials />
      <PartnersBox>
        <PartnersTitle>
          Conheça nossos <b>parceiros</b> e como nós <b>atuamos</b> para
          ajudá-los
        </PartnersTitle>
        <Text>
          Conheça nossos clientes, o serviço que prestamos e a relação que
          nutrimos com eles!
        </Text>
        <ScrollLink
          to="PartnersContainer"
          spy={true}
          smooth={true}
          offset={10}
          duration={1100}
          delay={120}
        >
          <DownArrow />
        </ScrollLink>
      </PartnersBox>
    </PartnersHomeContainer>
  );
}

export default PartnersHome;

const DownArrow = styled(ArrowDown)`
  margin-top: 0;
`;

const PartnersTitle = styled(Title)`
  width: 80%;

  font-size: 4.5rem;
  b {
    font-size: 1em;
    white-space: normal;
  }
  @media (max-width: 768px) {
    font-size: 5.5;
  }
  @media (max-width: 620px) {
    width: 90%;
  }
  @media (max-width: 520px) {
    width: 100%;
    font-size: 3.5rem;
  }
`;

const PartnersHomeContainer = styled(PatternPageContainer)`
  grid-template-rows: 10% auto 1fr;

  @media (max-width: 520px) {
    grid-template-rows: 10% 1fr 10% auto 10%;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    z-index: 50;
    left: 0;
    width: 100%;
    height: 20%;
    pointer-events: none;
    background-image: linear-gradient(
      ${({ theme }) => theme.color.white + "00"},
      ${({ theme }) => theme.color.white}
    );
  }
`;

const PartnersBox = styled(PatterPageBox)`
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const GoToProject = styled(Link)`
  color: ${({ theme }) => theme.color.main.color};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 0.1rem;
  transition: ${({ theme }) => theme.transition.slow};
  margin: 1rem 0;
  &::after {
    content: "";
    position: absolute;
    transition: ${({ theme }) => theme.transition.slow};

    bottom: 0;
    width: 90%;
    background-color: ${({ theme }) => theme.color.main.color};
    height: 2px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.white};
    transform: scale(1.05);
    &::after {
      width: 95%;
      background-color: ${({ theme }) => theme.color.white};
    }
  }
`;
