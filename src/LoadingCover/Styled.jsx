import { ReactComponent as Logo } from "../assets/SplashScreen/Logo.svg";
import { ReactComponent as Text } from "../assets/SplashScreen/Text.svg";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

export const SplashContainer = styled(Div100vh)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  ${({ loading, theme }) =>
    !loading
      ? `
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: ${theme.transition.x4};
    `
    : `
    transition: ${theme.transition.fast};
  `}
`;

export const StyledLogo = styled(Logo)`
  position: absolute;

  width: 70%;
  height: 70%;
  max-width: 450px;
  max-height: 450px;
  transition: ${({ theme }) => theme.transition.slow};
  stroke-dasharray: 1045;
  stroke-dashoffset: 1045;
  stroke-linecap: round;
  stroke: ${({ theme }) => theme.color.main.color};
  fill: ${({ theme }) => theme.color.white};
  stroke-width: 1.5px;
  animation: LoadingLogo 1s alternate linear infinite;

  @keyframes LoadingLogo {
    0% {
      stroke-dashoffset: 1045;
      filter: drop-shadow(0px 0px 0px ${({ theme }) => theme.color.main.color});
    }
    10% {
      stroke-dashoffset: 1045;
      filter: drop-shadow(0px 0px 0px ${({ theme }) => theme.color.main.color});
    }
    90% {
      stroke-dashoffset: 0;
      filter: drop-shadow(
        0px 0px 10px ${({ theme }) => theme.color.main.color}
      );
    }

    100% {
      stroke-dashoffset: 0;
      filter: drop-shadow(
        0px 0px 10px ${({ theme }) => theme.color.main.color}
      );
    }
  }

  @keyframes LoadedLogo {
    0% {
    }
    100% {
      transform: translate(-50%) scale(0.8);
      stroke-dashoffset: 0;
      filter: drop-shadow(
        0px 0px 10px ${({ theme }) => theme.color.main.color}
      );
    }
  }
`;
