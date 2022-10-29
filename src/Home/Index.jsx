import styled, { useTheme } from "styled-components";
import HomeScreen from "./components/Home";
import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";
import WhoIs from "./components/WhoIs";
import WhatWeDo from "./components/WhatWeDo";
import HowDo from "./components/HowWeDo";
import Mailing_Contact from "./components/Mailing_Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";

const Home = function () {
  const theme = useTheme();

  return (
    <AppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <TopMenu />
      <SideMenu />
      <HomeScreen />
      <WhoIs />
      <WhatWeDo />
      <HowDo />
      <Mailing_Contact />
      <Footer />
      <ContactForm />
    </AppContainer>
  );
};

export default Home;

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
