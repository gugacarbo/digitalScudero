import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import Socials from "../../../../components/Socials";
import { ReactComponent as LogoSvg } from "../../../../../assets/Logo.svg";
import { Link } from "react-router-dom";
import BackgroundImage from "../../../../../assets/Home-Background.jpg";

function PartnersHome() {
  return (
    <PartnersHomeContainer id="PartnersHome">
      <Socials />
      <PartnersBox>
        <Title>
          <b>Conheça nossos parceiros e como nós atuamos para ajudá-los</b>
        </Title>
        <Text>
          Conheça nossos clientes, o serviço que prestamos e a relação que
          nutrimos com eles!
        </Text>
      </PartnersBox>
    </PartnersHomeContainer>
  );
}

export default PartnersHome;

const PartnersHomeContainer = styled(MainContainer)`
  background-image: url(${BackgroundImage});
  background-size: 100%;
  background-position: right;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 15% 73% 12%;
  grid-template-rows: 10% 80% 10%;
  place-items: center;

  grid-template-areas:
    ". . ."
    ". Content Socials"
    ". . .";

  position: relative;

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

const PartnersBox = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

const Text = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  font-weight: 300;
  width: 80%;
  text-align: justify;
  margin-right: auto;
  margin-bottom: auto;
`;
const Title = styled.h1`
  width: 70%;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.1rem;
  font-weight: 500;
  font-size: 4rem;
  margin-top: 10%;
  margin-right: auto;

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
