import { useContext, useRef, useState } from "react";
import MenuContext from "../../../context/MenuContext";
import ClientAreaButton from "./components/ClientAreaButton";
import MenuList from "./components/MenuList";
import MenuToggle from "./components/MenuToggle";
import Socials from "./components/Socials";
import { useDetectClickOutside } from "react-detect-click-outside";

import Div100vh from "react-div-100vh";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

function SideMenu() {
  const { open, setOpen, clickOut } = useContext(MenuContext);
  const TogglerRef = useRef();

  const ref = useDetectClickOutside({
    onTriggered: (a) => clickOut(a),
  });

  const menuAnimations = {
    open: {
      x: 0,
    },
    close: {
      x: "100%",
    },
  };

  return (
    <SideMenuContainer
      variants={menuAnimations}
      initial={"close"}
      animate={open ? "open" : "close"}
      ref={ref}
      transition={{
        duration: 0.55,
        ease: "easeInOut",
      }}
    >
      <HighDiv>
        <ClientAreaButton />
        <MenuToggle />
        <MenuList />
        <Socials />
      </HighDiv>
    </SideMenuContainer>
  );
}

export const SideMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.black};
  width: 40vh;

  display: flex;
  flex-direction: column;
  @media (max-width: 420px) {
    width: 100vw;
  }
`;

const HighDiv = styled(Div100vh)`
  display: flex;
  padding: 2rem;

  flex-direction: column;
`;
export default SideMenu;
