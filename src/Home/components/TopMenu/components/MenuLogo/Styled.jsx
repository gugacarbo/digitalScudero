import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../../../assets/Logo.svg";

export const MenuTopLogoContent = styled.div`
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

  transform: translateY(15%) translateX(-100%);
  opacity: 0;
  ${({ scrolled }) =>
    scrolled &&
    `
    opacity: 1;
    transform: translateY(15%) translateX(-20%);
    `}

  .Digital {
    font-size: 0.4em;
    font-family: "Gothan";
    left: 0.4em;
    top: -0.3em;
    position: absolute;
  }
`;

export const MenuIcon = styled(LogoSvg)`
  height: 50px;
  margin: auto 0;
  cursor: pointer;
  fill: #fff;
  transition: ${({ theme }) => theme.transition.x3};
  * {
    fill: #fff;
  }
  ${({ scrolled }) =>
    scrolled &&
    `
    transform: scale(0.8);
    `}
`;
