import { useContext } from "react";
import { List, MenuItem } from "./Styled";
import MenuContext from "../../../../../context/MenuContext";
function MenuList() {
  return (
    <List>
      <Item to="Home">HOME</Item>
      <Item to="WhoIs">QUEM SOMOS</Item>
      <Item to="WhatWeDo">O QUE FAZEMOS</Item>
      <Item to="HowWeDo">COMO FAZEMOS</Item>
      <Item to="#">NOSSOS CASES</Item>
      <Item to="Mailing">CONTATO</Item>
    </List>
  );
}

import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
const Item = ({ children, to, props }) => {
  const { setOpen } = useContext(MenuContext);
  const location = useLocation();

  return (
    <MenuItem
      {...props}
      as={location == "/" ? ScrollLink : Link}
      activeClass="Selected"
      to={to}
      spy={true}
      smooth={"easeInOutCubic"}
      offset={0}
      duration={850}
      isDynamic={true}
      onClick={() => setOpen(false)}
    >
      {children}
    </MenuItem>
  );
};

export default MenuList;
