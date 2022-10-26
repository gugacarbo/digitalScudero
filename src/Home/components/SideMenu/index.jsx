import { useContext, useState } from "react";
import MenuContext from "../../../context/MenuContext/MenuContext";
import ClientAreaButton from "./components/ClientAreaButton";
import MenuList from "./components/MenuList";
import { SideMenuContainer } from "./Styled";
import MenuToggle from "./components/MenuToggle";
import Socials from "./components/Socials";

function SideMenu() {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <SideMenuContainer open={open}>
      <ClientAreaButton />
      <MenuToggle />
      <MenuList />
      <Socials />
    </SideMenuContainer>
  );
}

export default SideMenu;
