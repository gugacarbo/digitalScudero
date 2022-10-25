import { useContext, useState } from "react";
import MenuContext from "../../../context/MenuContext/MenuContext";
import { SideMenuContainer } from "./Styled";

function SideMenu() {
  const { open, setOpen } = useContext(MenuContext);
  return <SideMenuContainer open={open}></SideMenuContainer>;
}

export default SideMenu;
