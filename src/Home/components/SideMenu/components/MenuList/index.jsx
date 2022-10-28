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

const Item = ({ children, to, props }) => {
  const { setOpen } = useContext(MenuContext);

  return (
    <MenuItem
      {...props}
      activeClass="Selected"
      to={to}
      spy={true}
      smooth={'easeInOutCubic'}
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
