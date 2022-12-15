import styled from "styled-components";
import AvaliationItem from "../AvaliationItem";
import { ReactComponent as LeftArrowsSvg } from "../../../../../../../../../../assets/LeftArrows.svg";
import { useState } from "react";

function ScrollBox({ avaliations }) {
  const [showing, setShowing] = useState(0);
  const [toNext, setToNext] = useState(0);
  const [toPrev, setToPrev] = useState(0);

  const current = avaliations[showing];
  const next = avaliations[showing == avaliations.length - 1 ? 0 : showing + 1];
  const prev = avaliations[showing == 0 ? avaliations.length - 1 : showing - 1];
  const AnimationTime = 0.5; //s

  function handleNext() {
    if (toNext == 0 && toPrev == 0) {
      setToNext(1);
      setTimeout(() => {
        setShowing(showing == avaliations.length - 1 ? 0 : showing + 1);
        resetAnimation();
      }, AnimationTime * 990);
    }
  }
  function handlePrev() {
    if (toNext == 0 && toPrev == 0) {
      setToPrev(1);
      setTimeout(() => {
        setShowing(showing == 0 ? avaliations.length - 1 : showing - 1);
        resetAnimation();
      }, AnimationTime * 990);
    }
  }

  function resetAnimation() {
    setToNext(0);
    setToPrev(0);
  }

  const nextItemAnimation = {
    back: {
      x: "100%",
      transitionEnd: {
        display: "flex",
      },
      transition: {
        duration: 0,
      },
    },
    animate: {
      x: "0%",
      transitionEnd: {
        display: "none",
      },
      transition: {
        duration: AnimationTime,
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };

  const prevItemAnimation = {
    back: {
      x: "-100%",
      transitionEnd: {
        display: "flex",
      },
      transition: {
        duration: 0,
      },
    },
    animate: {
      x: "0%",
      transitionEnd: {
        display: "none",
      },
      transition: {
        duration: AnimationTime,
      },
    },
  };

  return (
    <ScrollContainer>
      <ScrollerButton onClick={handlePrev}>
        <LeftArrowsSvg />
      </ScrollerButton>
      <AvaliationBox>
        {
          <AvaliationItem
            prev={1}
            avaliation={prev}
            variants={prevItemAnimation}
            animate={toPrev ? "animate" : "back"}
          />
        }
        {<AvaliationItem avaliation={current} />}
        {
          <AvaliationItem
            next={1}
            avaliation={next}
            variants={nextItemAnimation}
            animate={toNext ? "animate" : "back"}
          />
        }
      </AvaliationBox>
      <ScrollerButton right={1} onClick={handleNext}>
        <LeftArrowsSvg />
      </ScrollerButton>
    </ScrollContainer>
  );
}

export default ScrollBox;

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  aspect-ratio: 3.5;
`;
const AvaliationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.main.color};
  border-radius: 1.5rem;
  color: #000;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    border-radius: 0.8rem;
  }
  @media (max-width: 520px) {
    border-radius: 0.6rem;
  }
  @media (max-width: 414px) {
    border-bottom-right-radius: 0.5rem;
  }
  @media (max-width: 320px) {
    border-radius: 0.3rem;
  }
`;

const ScrollerButton = styled.button`
  border: none;
  width: 100%;
  height: 80%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.color.main.color};
  border-bottom: 1px solid ${({ theme }) => theme.color.main.color};

  border-left: 1px solid ${({ theme }) => theme.color.main.color};
  margin: auto 0;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.color.main.color};
    transition: ${({ theme }) => theme.transition.main};

    width: 3rem;
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.color.main.light};
    }
  }
  &:active {
    svg {
      fill: ${({ theme }) => theme.color.main.darker};
    }
  }

  @media (max-width: 520px) {
  height: 40%;

  }

  ${({ theme, right }) =>
    right
      ? `
    border-right: 1px solid ${theme.color.main.color};
    border-left: none;
    
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
    svg{
        transform:rotate(180deg);
  }

  @media (max-width: 768px) {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
  @media (max-width: 520px) {
    border-top-right-radius: 0.6rem;  
    border-bottom-right-radius: 1rem;
  }
  @media (max-width: 414px) {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  @media (max-width: 320px) {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
  `
      : `
  
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  
@media (max-width: 768px) {
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  @media (max-width: 520px) {
    border-top-left-radius: 0.6rem;  
    border-bottom-left-radius: 1rem;
  }
  @media (max-width: 414px) {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  @media (max-width: 320px) {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }
      `}
`;
