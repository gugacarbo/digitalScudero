import { motion } from "framer-motion";
import styled from "styled-components";

function Alert() {
  const alerting = 0;
  const duration = 0.5;

  return (
    <AlertContainer
      initial={{ y: "-100%" }}
      animate={{
        y: alerting ? "0%" : "-100%",
      }}
      transition={{ duration }}
    >
      <AlertContent
        initial={{ y: "-100%" }}
        animate={{
          y: alerting ? "0%" : "-200%",
        }}
        transition={{ duration }}
      >
        <AlertTitle>Aviso</AlertTitle>
        <AlertText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid
          ratione, quas repellat
        </AlertText>
      </AlertContent>
    </AlertContainer>
  );
}

const AlertTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
`;
const AlertText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  width: 90%;
  text-align: center;
`;

const AlertContent = styled(motion.div)`
  max-width: 30rem;
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  border-radius: 2rem;
  border: 0.02rem solid ${({ theme }) => theme.color.main.color};
  top: 5vh;
  pointer-events: all;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  padding: 1.5rem 0;
`;

const AlertContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 20vh;
  z-index: 300;
  pointer-events: none;
  background-image: ${({ theme }) => `
    linear-gradient(to bottom, ${theme.background},  transparent)
  `};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Alert;
