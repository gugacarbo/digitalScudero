import { List, MenuItem } from "./Styled";

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
  return (
    <MenuItem
      {...props}
      to={to}
      spy={true}
      smooth={'easeInOutCubic'}
      isDynamic={true}
      offset={0}
      duration={1500}
    >
      {children}
    </MenuItem>
  );
};

export default Menu;
