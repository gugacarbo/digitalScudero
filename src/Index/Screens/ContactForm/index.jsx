import { motion } from "framer-motion";
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import FormContent from "./components/FormContent";
import Header from "./components/Header";
function ContactForm() {
  return (
    <ContactFormMotion
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <ContactFormModal>
        <Header />
        <FormContent />
      </ContactFormModal>
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
