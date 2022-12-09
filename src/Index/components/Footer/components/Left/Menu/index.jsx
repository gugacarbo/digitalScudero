import { List } from "./Styled";

import { Item } from "../../../../SideMenu/components/MenuList";

function Menu() {
  return (
    <List>
      <Item to="Home">HOME</Item>
      <Item to="WhoIs">QUEM SOMOS</Item>
      <Item to="WhatWeDo">O QUE FAZEMOS</Item>
      <Item to="HowWeDo">COMO FAZEMOS</Item>
      <Item to="/cases" isLink={true}>
        NOSSOS CASES
      </Item>
      <Item to="Mailing">CONTATO</Item>
    </List>
  );
}

export default Menu;
