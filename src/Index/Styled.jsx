import Div100vh from "react-div-100vh";
import styled from "styled-components";
import LogoBlack from "../assets/background/LogoBlack.svg";
import LogoWhite from "../assets/background/LogoWhite.svg";

export const MainContainer = styled(Div100vh)`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  position: relative;
  overflow: hidden;
  ${({ theme, bg }) =>
    bg &&
    `
    background-image: url(${bg == "white" ? LogoBlack : LogoWhite});
      background-size: 130%;
      background-position-x: 10vw;
      background-position-y: center;
      background-repeat: no-repeat;
      
      background-color: ${bg == "white" ? theme.color.white : theme.background};
      
  & *{
    z-index: 5;
  }
    &::before, &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 120%;
      height: 20%;
      z-index: 1;
      pointer-events: none;

      background-image: linear-gradient(
        to bottom,
        ${bg == "white" ? theme.color.white : theme.background} 0%,
        rgba(255, 255, 255, 0) 100%
      );
      }
      &::after {
        top: auto;
        bottom: 0;
        background-image: linear-gradient(
          to top,
          ${bg == "white" ? theme.color.white : theme.background} 0%,
          rgba(255, 255, 255, 0) 100%
        );

        }
`}
`;

export const BaseButton = styled.button`
  background-color: ${({ theme }) => theme.color.main.color};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 120px;
  padding: 0.4rem 3rem;
  font-size: 1.2rem;
  margin: 0 auto;
  font-weight: 300;
  letter-spacing: 0.05rem;
  width: 40%;
  max-width: 900px;
  transition: ${({ theme }) => theme.transition.slow};
  border: 1px solid ${({ theme }) => theme.color.main.color};
  outline: none;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.main.color};
  }
`;

export const BaseInput = styled.input`
  outline: none;

  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.main.color};
  border: none;
  border-radius: 120px;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  transition: ${({ theme }) => theme.transition.main};
  border: 1px solid ${({ theme }) => theme.color.main.color};
  cursor: text;
  &:focus {
    border-color: ${({ theme }) => theme.color.main.light};
  }
`;
