import Div100vh from "react-div-100vh";
import styled from "styled-components";
import LogoBlack from "../assets/background/LogoBlack.svg";
import LogoWhite from "../assets/background/LogoWhite.svg";
import BackgroundImage from "../assets/Home-Background.jpg";

export const MainContainer = styled(Div100vh)`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  position: relative;
  overflow: hidden;

  ${({ theme, homeBg }) => `
    background-image: url(${BackgroundImage});
    background-size: 95%;
    background-position: right;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
      background-size: 170% 150%;
      background-position: right 0vh;
    }

    @media (max-width: 520px) {
      background-size: 200% 200%;
      background-position: right 0vh;
    }
  `}

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
  @media (max-width: 520px) {
    ${({ bg }) =>
      bg &&
      `
    background-size: 350%;
    background-position-x: 50%;
    `}
  }
`;

export const BaseButton = styled.button`
  background-color: ${({ theme }) => theme.color.main.color};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 120px;
  padding: 0.4rem 3rem;
  font-size: 1.2rem;
  margin: 0 auto;
  font-weight: 400;
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

  ${({ theme, isSubmitting, status }) =>
    status && `color: ${theme.color.white} !important;`}
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 0rem;
    height: 3rem;
    transform: scale(0.3);
    overflow: visible;
    background-color: transparent;
    z-index: -1;

    background-color: transparent;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color + "a0"},
          0 0 0 0 ${({ theme }) => theme.color.main.color + "a0"};
      }
      40% {
        box-shadow: 0 0 0 10rem ${({ theme }) => theme.color.main.color + "00"},
          0 0 0 0 ${({ theme }) => theme.color.main.color + "a0"};
      }
      80% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color + "00"},
          0 0 0 30rem ${({ theme }) => theme.color.main.color + "00"};
      }
      100% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color + "00"},
          0 0 0 30rem ${({ theme }) => theme.color.main.color + "00"};
      }
    }

    @keyframes animationSuccess {
      0% {
        /* box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.light + "a0"},
          0 0 0 0 ${({ theme }) => theme.color.main.light + "a0"}; */
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color},
          0 0 0 0 ${({ theme }) => theme.color.main.color};
      }

      50% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
      100% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
    }
    @keyframes animationError {
      0% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.red},
          0 0 0 0 ${({ theme }) => theme.color.red};
      }

      50% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
      100% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
    }
  }

  ${({ status, theme, isSubmitting }) => {
    if (!isSubmitting) {
      switch (status) {
        case "success":
          return `
          pointer-events: none;
          border-color: ${theme.color.main.light};
          color: ${theme.color.white};
          &::after {
            background-color: ${theme.color.main.light};
            animation: animationSuccess 2s forwards;
          }
          `;
        case "error":
          return `
          pointer-events: none;
          color: ${theme.color.white};
          border-color: ${theme.color.red};
          &::after {
            background-color: ${theme.color.red};
            animation: animationError 2s forwards;
            }
          `;
      }
    } else {
      return `
        pointer-events: none;
        border-color: ${theme.color.main.dark};
        color: ${theme.color.darkGray};
        &::after {
          animation: pulse 2s infinite;
        }
        `;
    }
  }}

  @media (max-width: 768px) {
    width: 55%;
    padding: 0.6rem 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
  @media (max-width: 620px) {
    width: 70%;
  }
  @media (max-width: 414px) {
    width: 85%;
  }
  @media (max-width: 300px) {
    width: 95%;
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
