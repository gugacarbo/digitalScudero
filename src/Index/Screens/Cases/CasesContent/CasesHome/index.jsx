import styled from "styled-components";
import Socials from "../../../../components/Socials";
import { Link } from "react-scroll";
import {
  ArrowDown,
  Dots,
  Text,
  Title,
  Logo,
  PatterPageContainer,
  PatterPageBox,
} from "../../../PatternPageStyled";

function CasesHome() {
  return (
    <CasesHomeContainer id="CasesHome">
      <Socials />
      <CasesBox>
        <Logo />
        <Title>
          Nossos <b>Cases</b>
        </Title>
        <Text>
          Conheça nosso portfolio e descubra o que fizemos para aumentar as
          vendas dos nossos parceiros.
        </Text>
        <Dots />
        <Link
          to="CasesContainer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1100}
          delay={120}
        >
          <ArrowDown />
        </Link>
      </CasesBox>
    </CasesHomeContainer>
  );
}

const CasesHomeContainer = styled(PatterPageContainer)``;
const CasesBox = styled(PatterPageBox)``;
export default CasesHome;
