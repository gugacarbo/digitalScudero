import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../../../assets/Logo.svg";
import { Link } from "react-scroll";
export const MenuTopLogoContent = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: auto;

`;

export const MenuText = styled.div`
  position: relative;
  transition: ${({ theme }) => theme.transition.x3};
  font-family: BDPBIRGULA, Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin: auto 0;
  margin-left: 1rem;
  z-index: 55;

  transform: translateY(15%) translateX(-130%);
  opacity: 0;
  text-shadow: 0px 0 1px ${({ theme }) => theme.color.darkGray},
    0px 0 2px ${({ theme }) => theme.color.mediumGray};

  .Digital {
    font-size: 0.4em;
    font-family: "Gothan";
    left: 0.4em;
    top: -0.3em;
    position: absolute;
  }

  ${({ scrolled }) =>
    scrolled &&
    `
    opacity: 1;
    transform: translateY(15%) translateX(-20%);
    `}
`;

export const MenuIcon = styled(LogoSvg)`
  height: 50px;
  margin: auto 0;
  cursor: pointer;

  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.x3};
  overflow: visible;
  * {
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.color.darkGray};
  }
  ${({ scrolled }) =>
    scrolled &&
    `
    transform: scale(0.8);
    `}
`;
