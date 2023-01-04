import { useContext, useEffect, useState } from "react";
import MenuToggle from "./components/MenuToggle";
import Lenguage from "./components/Lenguage";
import MeetingButton from "./components/MeetingButton";
import MenuLogo from "./components/MenuLogo";
import MenuContext from "../../../context/MenuContext";
import styled from "styled-components";

function TopMenu() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [height, setHeight] = useState(0);
  const { ToggleRef } = useContext(MenuContext);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    listenToScroll();
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll < heightToHideFrom) {
      isScrolled && setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <TopMenuContainer scrolled={!isScrolled}>
      <TopMenuContent>
        <MenuLogo scrolled={!isScrolled} />
        <MeetingButton scrolled={!isScrolled} />
        <Lenguage hide={false} />
        <MenuToggle scrolled={!isScrolled} />
      </TopMenuContent>
    </TopMenuContainer>
  );
}

export default TopMenu;

export const TopMenuContainer = styled.nav`
  position: fixed;
  top: 0;
  pointer-events: none;
  z-index: 50;
  width: 100vw;
  transition: ${({ theme }) => theme.transition.slow};
  ${({ scrolled }) =>
    scrolled &&
    `
      transform: translateY(0%);
    `}
`;

export const TopMenuContent = styled.div`
  width: 100%;
  pointer-events: none;
  * {
    pointer-events: all;
  }
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 5%;
  z-index: 55;
  @media (max-width: 620px) {
    padding: 2rem 5%;
  }
  @media (max-width: 414px) {
    padding: 1rem 5%;
  }
  @media screen and (max-width: 360px) {
    padding: 1rem 3%;
  }
`;
