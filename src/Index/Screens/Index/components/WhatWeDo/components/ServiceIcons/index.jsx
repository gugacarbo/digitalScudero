import styled from "styled-components";

import { ReactComponent as SearchSvg } from "../../../../../../../assets/services/Search.svg";
import { ReactComponent as PenSvg } from "../../../../../../../assets/services/Pen.svg";
import { ReactComponent as WwwSvg } from "../../../../../../../assets/services/Www.svg";
import { ReactComponent as FbIgSvg } from "../../../../../../../assets/services/FbIg.svg";
import { ReactComponent as LeftArrowSvg } from "../../../../../../../assets/LeftArrow.svg";
import { useEffect, useRef, useState } from "react";

function ServiceIcons() {
  const [scrolling, setScrolling] = useState(0);

  const scrollerRef = useRef();

  function scroll(side = "left") {
    const wid =
      scrollerRef.current.scrollWidth -
      scrollerRef.current.parentElement.offsetWidth * 0.9;

    if (side == "left") {
      setScrolling(scrolling == 0 ? 3 : scrolling - 1);
    }
    if (side == "right") {
      setScrolling(scrolling == 3 ? 0 : scrolling + 1);
    }

    scrollerRef.current.scroll({
      top: 0,
      left: (wid / 3) * scrolling * 0.9,
      behavior: "smooth",
    });
  }

  return (
    <IconsContainer>
      <ContainerScroller ref={scrollerRef}>
        <MobileGap />
        <IconBox>
          <SearchSvg />
          <IconText>Marketing de Busca</IconText>
        </IconBox>

        <IconBox>
          <WwwSvg />
          <IconText>Desenvolvimento de Websites</IconText>
        </IconBox>
        <IconBox>
          <FbIgSvg />
          <IconText>Gestão de Mídias Sociais</IconText>
        </IconBox>
        <IconBox>
          <PenSvg />
          <IconText>Branding</IconText>
        </IconBox>
        <MobileGap />
      </ContainerScroller>
      <MobileButton>
        <LeftArrowSvg onClick={() => scroll("left")} />
      </MobileButton>
      <MobileButton right>
        <LeftArrowSvg onClick={() => scroll("right")} />
      </MobileButton>
    </IconsContainer>
  );
}
const IconsContainer = styled.div`
  width: 65%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 100%;
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      left: 0;
      z-index: 10;
      top: 0;
      width: 20%;
      pointer-events: none;
      background-image: ${({ theme }) =>
        `linear-gradient(to right, ${theme.color.white}, transparent)`};
    }
    &::before {
      left: initial;
      right: 0;
      background-image: ${({ theme }) =>
        `linear-gradient(to left,${theme.color.white}, transparent)`};
    }
  }
  @media (max-width: 414px) {
  }
`;

const MobileButton = styled.div`
  display: none;
  pointer-events: none;

  @media (max-width: 520px) {
    display: flex;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 5rem;

    justify-content: center;
    align-items: center;
    z-index: 15;
    svg {
      pointer-events: all;

      width: 2.5rem;
      cursor: pointer;
      fill: ${({ theme }) => theme.color.main.darker};
    }
    &:hover {
      svg {
        fill: ${({ theme }) => theme.color.main.light};
      }
    }

    ${({ right }) =>
      right &&
      `
      svg {
        transform: rotate(180deg);
      }
      left: initial;
      right: 0;
    `}
  }
`;
const MobileGap = styled.span`
  display: none;

  @media (max-width: 520px) {
    display: flex;
  }
`;
const ContainerScroller = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5%;
  width: 100%;

  @media (max-width: 620px) {
    column-gap: 3%;
  }
  @media (max-width: 520px) {
    display: grid;
    padding-bottom: 0.5rem;
    grid-template-rows: 100%;
    grid-template-columns: 10% 35% 35% 35% 35% 10%;
    overflow-x: scroll;
    overflow-y: hidden;
    column-gap: 0.5rem;
    position: relative;
    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;

const IconText = styled.span`
  width: 95%;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.color.main.color};
  margin: 1rem auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    font-size: 1.1rem;
  }

  @media (max-width: 520px) {
    font-size: 1rem;
    margin: 0;
  }
  @media (max-width: 414px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

const IconBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
  place-items: center;
  overflow: hidden;
  margin-top: 1rem;

  svg {
    overflow: visible;
    width: 99%;
    height: 99%;
  }
  @media (max-width: 520px) {
    margin: 0;
    grid-template-rows: 1fr 4rem;

    svg {
    }
  }
`;

export default ServiceIcons;
