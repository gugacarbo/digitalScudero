import styled from "styled-components";
import { ReactComponent as SocialDots } from "../../../assets/SocialDots.svg";

export const Icon = styled.a`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  padding: 0.2rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.color.white};
    transition: ${({ theme }) => theme.transition.main};

    width: 80%;
    height: 80%;
  }
  &:hover {
    transform: scale(1.1);
    svg {
      fill: ${({ color, theme }) => color || theme.color.main.color};
    }
  }
  @media (max-width: 768px) {
    width: 3.2rem;
    height: 3.2rem;
  }
  @media (max-width: 520px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Dots = styled(SocialDots)`
  height: 100%;
  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.main};
  ${({ rotate }) =>
    rotate &&
    `
    transform: rotate(180deg);
    `}
  stroke: transparent;
  stroke-width: 0;
  @media (max-width: 768px) {
    height: 80%;
    ${({ rotate }) =>
      rotate
        ? `
        transform: rotate(180deg);
        margin-top: auto;
        `
        : `
        margin-bottom: auto;
    `}
  }

  @media (max-width: 520px) {
    margin: 0;
    height: 140%;
    ${({ rotate }) =>
      rotate
        ? `
        transform: rotate(90deg);
        `
        : `
        transform: rotate(-90deg);
    `}
  }
  @media (max-width: 414px) {
    margin: 0;
    height: 130%;
    
  }
  
`;

export const SocialsContainer = styled.div`
  grid-area: Socials;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 30% auto 30%;
  overflow: hidden;
  height: 90%;
  place-items: center;
  transition: ${({ theme }) => theme.transition.main};
  margin: 0 auto;
  &:hover ${Dots} {
    fill: ${({ theme }) => theme.color.main.color};
  }
  @media (max-width: 768px) {
    grid-template-rows: 32% auto 32%;
  }

  @media (max-width: 520px) {
    grid-template-rows: 100%;

    grid-template-columns: 32% auto 32%;
    height: 100%;
    width: 110%;
    transform: translateX(-5%);
    margin: 0;
  }
  @media (max-width: 414px) {
    grid-template-columns: 33% auto 33%;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-direction: column;
  @media (max-width: 520px) {
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 520px) {
    justify-content: space-evenly;
  }
`;
