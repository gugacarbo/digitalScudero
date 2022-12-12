import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import Socials from "../../../../components/Socials";
import BackgroundImage from "../../../../../assets/Home-Background.jpg";
import { ReactComponent as LogoSvg } from "../../../../../assets/Logo.svg";
import { ReactComponent as DotsSvg } from "../../../../../assets/services/ServiceDots.svg";

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
      </ServicesBox>
    </ServicesHomeContainer>
  );
}

export default ServicesHome;

const Dots = styled(DotsSvg)`
  width: 30%;
  opacity: 0.8;
  margin-top: 3rem;

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 520px) {
    width: 70%;
  }
  @media (max-width: 414px) {
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  line-height: 2rem;
  font-weight: 300;
  width: 60%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 85%;
  }
`;
const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-align: center;
  line-height: 4rem;
  width: 100%;
  b {
    white-space: nowrap;
    font-weight: 600;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.color.main.color};
  }
`;
const Logo = styled(LogoSvg)`
  width: 12%;
  fill: ${({ theme }) => theme.color.white};
  @media (max-width: 900px) {
    width: 20%;
  }
  @media (max-width: 768px) {
    width: 25%;
  }
  @media (max-width: 520px) {
    width: 30%;
  }
  @media (max-width: 414px) {
    width: 35%;
  }
`;
const ServicesHomeContainer = styled(MainContainer)`
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

  @media screen and (max-width: 768px) {
  }
  @media (max-width: 520px) {
    grid-template-columns: 7% 1fr 7%;
    grid-template-rows: 10% 75% 10% 1fr;
    place-items: center;
    grid-template-areas:
      ".     .      . "
      ".  Content  . "
      ".  Socials   . "
      ".     .      . ";
  }
  @media (max-width: 414px) {
  }
`;

const ServicesBox = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
  }
  @media (max-width: 520px) {
    gap: 2rem;
  }
  @media (max-width: 414px) {
    gap: 3rem;
  }
`;
