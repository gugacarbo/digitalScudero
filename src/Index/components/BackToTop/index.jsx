import styled, { useTheme } from "styled-components";
import { use100vh } from "react-div-100vh";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactComponent as ArrowDownSvg } from "../../../assets/ArrowDown.svg";
import { animateScroll } from "react-scroll";

function BackToTop() {
  const theme = useTheme();
  const scroller = animateScroll;

  const [scrolled, setScrolled] = useState(0);
  const { scrollY } = useScroll();

  const handleScrolled = (latest) => {
    const height = document.documentElement?.clientHeight || window.innerHeight;
    latest >= height / 2 ? setScrolled(1) : setScrolled(0);
  };

  useEffect(() => {
    return scrollY.onChange((latest) => handleScrolled(latest), []);
  }, []);

  return (
    <TopButton
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: scrolled ? 0.4 : 0,
        x: scrolled ? 0 : "150%",
      }}
      whileHover={{
        x: scrolled ? 0 : "150%",
        opacity: 1,
        borderColor: theme.color.main.color,
      }}
      whileTap={{
        scale: 0.9,
        borderColor: theme.color.main.dark,
      }}
      onClick={() => {
        scroller.scrollToTop();
      }}
    >
      <ArrowUp />
    </TopButton>
  );
}

const ArrowUp = styled(ArrowDownSvg)`
  transform: rotate(180deg);
  width: 1.6rem;

  fill: ${({ theme }) => theme.color.white};
`;

const TopButton = styled(motion.div)`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  padding: 1.1rem;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.main.light};
  align-items: center;
  cursor: pointer;

  @media (max-width: 520px) {
    bottom: 2rem;
    right: 2rem;
  }

  @media (max-width: 360px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

export default BackToTop;
