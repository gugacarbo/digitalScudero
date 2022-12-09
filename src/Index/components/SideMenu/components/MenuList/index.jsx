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
      <Item isLink={true} to="/cases" as={Link}>
        NOSSOS CASES
      </Item>
      <Item to="Mailing">CONTATO</Item>
    </List>
  );
}

export const Item = ({ children, to, isLink = false, ...props }) => {
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
    };
  }

  if (isLink) {
    LinkConfig = {
      as: Link,
      to,
    };
  }
  return (
    <MenuItem
      {...LinkConfig}
      {...props}
      onClick={(e) => {
        setOpen(false);
        props?.onClick && props.onClick();
      }}
    >
      {children}
    </MenuItem>
  );
};

export default MenuList;
