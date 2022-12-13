import { Link } from "react-scroll";
import styled from "styled-components";
import Socials from "../../../../components/Socials";

import {
  ArrowDown,
  Dots,
  Text,
  Title,
  Logo,
  PatternPageContainer,
  PatterPageBox,
} from "../../../PatternPageStyled";

function ServicesHome() {
  return (
    <ServicesHomeContainer id="ServicesHome">
      <Socials />
      <ServicesBox>
        <Logo />
        <Title>
          Nossos <b>Serviços</b>
        </Title>
        <Text>
          Para alavancar seu negócio, aplicamos estrategias inteligentes de
          Publicidade, Marketing e Negócios.
        </Text>
        <Dots />
        <Link
          to="ServicesContainer"
          spy={true}
          smooth={true}
          duration={1000}
          delay={120}
        >
          <ArrowDown />
        </Link>
      </ServicesBox>
    </ServicesHomeContainer>
  );
}

export default ServicesHome;

const ServicesHomeContainer = styled(PatternPageContainer)``;

const ServicesBox = styled(PatterPageBox)``;
