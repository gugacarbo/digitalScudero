import { useContext } from "react";
import { List, MenuItem } from "./Styled";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

import MenuContext from "../../../../../context/MenuContext";
function MenuList() {
  return (
    <List>
      <Item to="Home">HOME</Item>
      <Item to="WhoIs">QUEM SOMOS</Item>
      <Item to="WhatWeDo">O QUE FAZEMOS</Item>
      <Item to="HowWeDo">COMO FAZEMOS</Item>
      <MenuItem to="/cases" as={Link}>
        NOSSOS CASES
      </MenuItem>
      <Item to="Mailing">CONTATO</Item>
    </List>
  );
}

const Item = ({ children, to, props }) => {
  const { setOpen } = useContext(MenuContext);
  const location = useLocation();
  var LinkConfig = {};
  if (location.pathname == "/") {
    LinkConfig = {
      as: ScrollLink,
      activeClass: "Selected",
      to: to,
      smooth: "easeInOutCubic",
      offset: 0,
      duration: 850,
    };
  } else {
    LinkConfig = {
      as: Link,
      to: "/",
      state: { to: to },
      onClick: () => {
        setOpen(false);
      },
    };
  }
  return (
    <MenuItem {...LinkConfig} {...props}>
      {children}
    </MenuItem>
  );
};

export default MenuList;
