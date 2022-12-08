import { List, MenuItem } from "./Styled";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

function Menu() {
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

const Item = ({ children, to, props }) => {
  const location = useLocation();
  var LinkConfig = {};
  if (location.pathname == "/") {
    LinkConfig = {
      as: ScrollLink,
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
  return (
    <MenuItem {...LinkConfig} {...props}>
      {children}
    </MenuItem>
  );
};

export default Menu;
