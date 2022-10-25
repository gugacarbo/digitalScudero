
import { ReactComponent as Logo } from "../assets/SplashScreen/Logo.svg";
import { ReactComponent as Text } from "../assets/SplashScreen/Text.svg";
import styled from "styled-components";
import Div100vh from "react-div-100vh";


export const SplashContainer = styled(Div100vh)`
position: fixed;
top: 0;
left: 0;
z-index: 1000;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: ${({ theme }) => theme.background};
transition: ${({ theme }) => theme.transition.x4};
${({ done }) =>
  done &&
  `
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  `}
`;

export const StyledLogo = styled(Logo)`
position: absolute;

width: 90%;
height: 90%;
max-width: 550px;
max-height: 550px;
transition: ${({ theme }) => theme.transition.slow};
stroke-dasharray: 1045;
stroke-dashoffset: 1045;
stroke: #fff;
fill: ${({ theme }) => theme.color.main.color};
stroke-width: 1.5px;

@keyframes LoadingLogo {
  0% {
    stroke-dashoffset: 1045;
  }
  10% {
    stroke-dashoffset: 1045;
  }
  90% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes LoadedLogo {
  0% {
  }
  100% {
    transform: translate(-50%) scale(0.8);
    stroke-dashoffset: 0;
  }
}
${({ loaded }) =>
  loaded
    ? `
  animation: LoadedLogo 1s ease-in-out forwards;
  `
    : `
  animation: LoadingLogo 3.6s alternate cubic-bezier(0.7, 0, 0.49, 0.95)
  infinite;
  `}
`;
export const StyledText = styled(Text)`
position: absolute;

width: 90%;
height: 90%;
max-width: 550px;
max-height: 550px;
transition: 1.4s;
fill: #fff;
opacity: 0;

${({ loaded }) =>
  loaded &&
  `
  opacity: 1;
  transform: translate(50%); 
  `}
`;
