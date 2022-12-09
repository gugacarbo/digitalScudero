import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import Socials from "../../../../components/Socials";
import BackgroundImage from "../../../../../assets/Home-Background.jpg";
import { ReactComponent as LogoSvg } from "../../../../../assets/Logo.svg";
import { ReactComponent as DotsSvg } from "../../../../../assets/services/ServiceDots.svg";
import { ReactComponent as ArrowDownSvg } from "../../../../../assets/ArrowDown.svg";
import { Link } from "react-scroll";

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

export default CasesHome;

const ArrowDown = styled(ArrowDownSvg)`
  width: 3rem;
  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.main};
  margin-top: 3rem;

  opacity: 0.8;
  cursor: pointer;
  &:hover {
    transform: translateY(0.5rem);
  }
`;
const Dots = styled(DotsSvg)`
  width: 30%;
  opacity: 0.8;
  margin-top: 3rem;
`;

const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  font-weight: 300;
  width: 60%;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.1rem;
  font-weight: 600;
  b {
    font-weight: 600;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.color.main.color};
  }
`;
const Logo = styled(LogoSvg)`
  width: 12%;
  fill: ${({ theme }) => theme.color.white};
`;
const CasesHomeContainer = styled(MainContainer)`
  background-image: url(${BackgroundImage});
  background-size: 95%;
  background-position: right;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 10% 80% 10%;
  place-items: center;

  grid-template-areas:
    ". . ."
    ". Content Socials"
    ". . .";
`;

const CasesBox = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
