import styled from "styled-components";
import { ReactComponent as SocialDots } from "../../../assets/SocialDots.svg";

export const Icon = styled.a`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  padding: 0.2rem;
  width: 1.8rem;
  height: 1.8rem;
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
`;

export const Dots = styled(SocialDots)`
  height: 100%;
  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.main};
  ${({ rotate }) => rotate && `transform: rotate(180deg);`}
  stroke: transparent;
  stroke-width: 0;
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
`;

export const IconsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;
