import styled from "styled-components";
import Socials from "../../../../components/Socials";
import { ReactComponent as LeftArrowsSvg } from "../../../../../assets/LeftArrows.svg";
import { stringToBoldElement } from "../../../../util/text";

import {
  PatternPageContainer,
  Title,
  BackLink,
  Dots,
} from "../../../PatternPageStyled";

function CaseHome({ text, title, logo, projectLink }) {
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
        <CaseTitle>
          <b>{title}</b>
        </CaseTitle>
        <Dots />
        <GoToProject href={projectLink} target="blank">
          Visite o Projeto
        </GoToProject>
        {text &&
          text.map((value, index, array) => (
            <Text key={index + "TC" + index}>{stringToBoldElement(value)}</Text>
          ))}
      </CaseBox>
    </CaseHomeContainer>
  );
}

export default CaseHome;

const CaseHomeContainer = styled(PatternPageContainer)``;

const CaseTitle = styled(Title)`
  b {
    white-space: normal;
  }

  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 414px) {
  }
`;

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
  @media (max-width: 520px) {
    line-height: 1.5rem;
  }
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

const CaseBox = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 0;
`;
