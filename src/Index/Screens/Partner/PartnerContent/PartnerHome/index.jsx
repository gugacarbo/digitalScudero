import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import Socials from "../../../../components/Socials";
import { ReactComponent as LeftArrowsSvg } from "../../../../../assets/LeftArrows.svg";
import { Link } from "react-router-dom";
import { stringToBoldElement } from "../../../../util/text";

import {
  PatternPageContainer,
  Title,
  Dots,
  BackLink,
} from "../../../PatternPageStyled";

function PartnerHome({ text, title, logo }) {
  return (
    <PartnerHomeContainer id="PartnerHome">
      <Socials />
      <PartnerBox>
        <BackLink to={"/parceiros"}>
          <LeftArrowsSvg /> Voltar
        </BackLink>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Title>
          Conheça a <b>{title}</b>
        </Title>
        <Dots />

        {text.map((value, index, array) => (
          <Text key={"T" + index}>{stringToBoldElement(value)}</Text>
        ))}
      </PartnerBox>
    </PartnerHomeContainer>
  );
}

export default PartnerHome;

const PartnerHomeContainer = styled(MainContainer)`
  background-size: 95%;
  background-position: right;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  place-items: center;
  grid-template-areas:
    ". . ."
    ". Content Socials"
    ". . .";

  @media screen and (max-width: 768px) {
    background-size: 170% 100%;
    background-position: right 0vh;
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
    background-size: 180% 100%;
    background-position: right 5vh;
  }
`;

const PartnerBox = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 0;
`;

const Logo = styled.div`
  width: 15%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${({ theme }) => theme.color.white};
  min-height: 4rem;
  img {
    height: 95%;
    width: 95%;
  }

  @media (max-width: 1100px) {
    width: 20%;
  }
  @media (max-width: 900px) {
    width: 25%;
  }
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 520px) {
    width: 40%;
  }
  @media (max-width: 414px) {
    width: 45%;
  }
`;

const PartnerTitle = styled(Title)`
  b {
    white-space: normal;
  }

  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 414px) {
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

const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.05rem;
  font-weight: 400;
  width: 90%;
  text-align: justify;
  line-height: 2rem;
  @media (max-width: 520px) {
    width: 100%;

    line-height: 1.4rem;
  }
  @media (max-width: 414px) {
  }
  b {
    font-weight: 500;
    color: ${({ theme }) => theme.color.main.color};
  }
`;
