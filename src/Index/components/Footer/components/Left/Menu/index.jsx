import styled from "styled-components";
import { Link } from "react-scroll";

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

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
  gap: 1rem;
`;
