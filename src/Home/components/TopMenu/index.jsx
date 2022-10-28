import { useContext, useEffect, useState } from "react";
import MenuToggle from "./components/MenuToggle";
import Lenguage from "./components/Lenguage";
import { TopMenuContainer, TopMenuContent } from "./Styled";
import MeetingButton from "./components/MeetingButton";
import MenuLogo from "./components/MenuLogo";
import MenuContext from "../../../context/MenuContext";

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
        <Lenguage />
        <MenuToggle scrolled={!isScrolled} />
      </TopMenuContent>
    </TopMenuContainer>
  );
}

export default TopMenu;
