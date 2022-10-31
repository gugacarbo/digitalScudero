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
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";

function Home() {
  const theme = useTheme();

  let history = useLocation();

  useEffect(() => {
    if (history?.state?.to) {
      scroller.scrollTo(history.state.to, {
        duration: 850,
        delay: 200,
        smooth: "easeInOutCubic",
        offset: 0,
      });
      let h = history;
      h.state.to = null;
      window.history.replaceState(h, document.title)
    } else {
      scroller.scrollTo("Home", {
        duration: 500,
        delay: 100,
        smooth: "easeInOutCubic",
        offset: 0,
      });
    }
  }, []);

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
    </AppContainer>
  );
}

export default Home;

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
