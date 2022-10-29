import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import MenuContext from "../../../context/MenuContext";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function ContactForm() {
  const open = false;
  return (
    <ContactFormMotion
      initial={variants.closed}
      transition={{ duration: 1 }}
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <ContactFormModal></ContactFormModal>
    </ContactFormMotion>
  );
}

const ContactFormMotion = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;

  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
`;

const ContactFormModal = styled(Div100vh)``;
export default ContactForm;
