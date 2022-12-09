import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import Socials from "../../../../components/Socials";
import { ReactComponent as LogoSvg } from "../../../../../assets/Logo.svg";
import { ReactComponent as DotsSvg } from "../../../../../assets/services/ServiceDots.svg";
import { ReactComponent as LeftArrowsSvg } from "../../../../../assets/LeftArrows.svg";
import { Link } from "react-router-dom";
import { stringToBoldElement } from "../../../../util/text";

function CaseHome({ text, title, logo, projectLink }) {
  console.log(projectLink);
  return (
    <CaseHomeContainer id="CaseHome">
      <Socials />
      <CaseBox>
        <BackLink to={"/cases"}>
          <LeftArrowsSvg /> Voltar
        </BackLink>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Title>
          <b>{title}</b>
        </Title>
        <Dots />
        <GoToProject href={projectLink} target="blank">
          Visite o Projeto
        </GoToProject>
        {text.map((value, index, array) => (
          <Text key={index}>{stringToBoldElement(value)}</Text>
        ))}
      </CaseBox>
    </CaseHomeContainer>
  );
}

export default CaseHome;

const GoToProject = styled.a`
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
  width: 30%;
  opacity: 0.8;
  margin-top: 3rem;
`;

const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.05rem;
  line-height: 2rem;
  font-weight: 400;
  width: 90%;
  text-align: justify;
  b {
    font-weight: 500;
    color: ${({ theme }) => theme.color.main.color};
  }
  &::first-letter {
    font-size: 1.05em;

    padding-left: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.main.color};
  }
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
const Logo = styled.div`
  width: 15%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 95%;
    width: 95%;
  }
  fill: ${({ theme }) => theme.color.white};
`;
const CaseHomeContainer = styled(MainContainer)`
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

const CaseBox = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
