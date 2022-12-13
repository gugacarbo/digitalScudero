import styled from "styled-components";

import { ReactComponent as LogoSvg } from "../../assets/Logo.svg";
import { ReactComponent as DotsSvg } from "../../assets/services/ServiceDots.svg";
import { ReactComponent as ArrowDownSvg } from "../../assets/ArrowDown.svg";
import BackgroundImage from "../../assets/Home-Background.jpg";
import { MainContainer } from "../Styled";
import { Link as DomLink } from "react-router-dom";

export const PatternPageContainer = styled(MainContainer)`
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

export const PatterPageBox = styled.div`
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

export const Logo = styled(LogoSvg)`
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

export const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-align: center;
  line-height: 4.2rem;
  width: 100%;
  b {
    white-space: nowrap;
    font-weight: 600;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.color.main.color};
  }
`;

export const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  line-height: 2rem;
  font-weight: 4 00;
  width: 60%;
  text-align: center;
  b {
    color: ${({ theme }) => theme.color.main.color};
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const BackLink = styled(DomLink)`
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

export const ArrowDown = styled(ArrowDownSvg)`
  width: 3rem;
  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.main};
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    transform: translateY(0.5rem);
  }
`;

export const Dots = styled(DotsSvg)`
  width: 30%;
  opacity: 0.8;
  //margin-top: 3rem;

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 520px) {
    width: 70%;
  }
  @media (max-width: 414px) {
  }
`;
