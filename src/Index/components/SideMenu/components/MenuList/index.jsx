import { useContext } from "react";
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

import styled from "styled-components";

export const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 1rem;
  width: 100%;
  margin-top: 10rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

import { Link } from "react-scroll";
export const MenuItem = styled(Link)`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  border-bottom: 2px solid transparent;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.main.color};
  }
  &.Selected {
    color: ${({ theme }) => theme.color.main.color};
    border-bottom: 2px solid ${({ theme }) => theme.color.main.color};
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
