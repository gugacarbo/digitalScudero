import { useContext, useRef, useState } from "react";
import MenuContext from "../../../context/MenuContext/MenuContext";
import ClientAreaButton from "./components/ClientAreaButton";
import MenuList from "./components/MenuList";
import { SideMenuContainer } from "./Styled";
import MenuToggle from "./components/MenuToggle";
import Socials from "./components/Socials";
import { useDetectClickOutside } from "react-detect-click-outside";

function SideMenu() {
  const { open, setOpen, clickOut } = useContext(MenuContext);
  const TogglerRef = useRef();

  const ref = useDetectClickOutside({
    onTriggered: (a) => clickOut(a),
  });

  return (
    <SideMenuContainer open={open} ref={ref}>
      <ClientAreaButton />
      <MenuToggle />
      <MenuList />
      <Socials />
    </SideMenuContainer>
  );
}

export default SideMenu;
