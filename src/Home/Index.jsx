import styled from "styled-components";
import HomeScreen from "./components/Home";
import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";
import WhoIs from "./components/WhoIs";
import WhatWeDo from "./components/WhatWeDo";
import HowDo from "./components/HowWeDo";
import Mailing_Contact from "./components/Mailing_Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const Home = function () {
  return (
    <AnimatePresence mode="wait">
      <AppContainer
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TopMenu />
        <SideMenu />
        <HomeScreen />
        <WhoIs />
        <WhatWeDo />
        <HowDo />
        <Mailing_Contact />
        <Footer />
      </AppContainer>
    </AnimatePresence>
  );
};

export default Home;
import { motion } from "framer-motion";

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
