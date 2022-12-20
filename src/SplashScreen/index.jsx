import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/SplashScreen/Logo.svg";
import { ReactComponent as Text } from "../assets/SplashScreen/Text.svg";
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import { motion } from "framer-motion";

const fadeOutTimeout = 1500;

const MyComponent = () => {
  const [Loaded, setLoaded] = useState(0);
  const [CloseSplash, setCloseSplash] = useState(0);
  const [NoSplash, setNoSplash] = useState(1);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setLoaded(1);
        setTimeout(() => {
          localStorage.setItem("ds_splash_screen", new Date());
        }, fadeOutTimeout);
      }, 500);
    };

    if (
      localStorage.getItem("ds_splash_screen") &&
      new Date(localStorage.getItem("ds_splash_screen")) != "Invalid Date" &&
      new Date().getTime() -
        new Date(localStorage.getItem("ds_splash_screen")).getTime() <
        3600 * 1000 //? 1h
    ) {
    } else {
      setNoSplash(0);

      document.body.style.overflow = "hidden";

      if (document.readyState === "complete") {
        onPageLoad();
      } else {
        window.addEventListener("load", onPageLoad);
        return () => window.removeEventListener("load", onPageLoad);
      }
    }
  }, []);

  useEffect(() => {
    if (Loaded) {
      setTimeout(() => {
        setCloseSplash(1);
        document.body.style.overflowY = "scroll";
      }, fadeOutTimeout);
    }
  }, [Loaded]);

  const logoAnimation = {
    initial: {
      x: "0%",
      scale: 1.2,
      transition: {
        duration: 0.01,
      },
    },
    loaded: {
      x: "-50%",
      scale: 0.9,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 12,
      },
    },
  };

  const nameAnimation = {
    initial: {
      x: "0%",
      scale: 1,
      opacity: 0,
      transition: {
        duration: 0.01,
      },
    },
    loaded: {
      x: "50%",
      scale: 0.9,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <SplashContainer done={CloseSplash} nosplash={NoSplash}>
      <LogoContent
        initial={"initial"}
        variants={logoAnimation}
        animate={Loaded ? "loaded" : "initial"}
      >
        <StyledLogo loaded={Loaded} />
      </LogoContent>
      <NameContent
        initial={"initial"}
        variants={nameAnimation}
        animate={Loaded ? "loaded" : "initial"}
      >
        <StyledName />
      </NameContent>
    </SplashContainer>
  );
};

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
  ${({ done, nosplash }) =>
    !nosplash &&
    done &&
    `
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  `}
  ${({ nosplash }) =>
    nosplash &&
    `
    display: none;
  transition: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  `}
`;
const LogoContent = styled(motion.div)`
  width: 20rem;
  height: auto;
  position: absolute;
  display: grid;
  place-items: center;
`;
const NameContent = styled(motion.div)`
  width: 20rem;
  height: auto;
  position: absolute;
  display: grid;
  place-items: center;
`;

export const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;

  stroke-dasharray: 1045;
  stroke-dashoffset: 1045;
  stroke: ${({ theme }) => theme.color.main.color};
  fill: ${({ theme }) => theme.color.white};
  stroke-width: 1.5px;

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
  ${({ loaded }) =>
    loaded
      ? `
      animation: forwards LoadingLogo ${fadeOutTimeout}ms;
      
      `
      : `
      animation: LoadingLogo 1.8s alternate cubic-bezier(0.7, 0, 0.49, 0.95) infinite;
      `}
`;
export const StyledName = styled(Text)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.color.white};
`;

export default MyComponent;
