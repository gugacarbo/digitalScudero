import styled from "styled-components";
import Socials from "../../../../components/Socials";
import { Link } from "react-scroll";
import {
  ArrowDown,
  Dots,
  Text,
  Title,
  Logo,
  PatternPageContainer,
  PatterPageBox,
} from "../../../PatternPageStyled";

function MethodsHome() {
  return (
    <MethodsHomeContainer id="MethodsHome">
      <Socials />
      <MethodsBox>
        <Logo />
        <Title>
          Nossa <b>Metodologia</b>
        </Title>
        <Text>
          Conheça a metodologia que aplicamos para cuidar do seu negócio
        </Text>
        <Dots />
        <Link
          to="MethodsContainer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1100}
          delay={120}
        >
          <ArrowDown />
        </Link>
      </MethodsBox>
    </MethodsHomeContainer>
  );
}

const MethodsHomeContainer = styled(PatternPageContainer)`
`;
const MethodsBox = styled(PatterPageBox)``;
export default MethodsHome;
