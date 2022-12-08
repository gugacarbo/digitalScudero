import styled, { useTheme } from "styled-components";
import TopMenu from "../../components/TopMenu";
import SideMenu from "../../components/SideMenu";

import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import PartnerContent from "./PartnerContent";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

function Partner() {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
      offset: 0,
    });
  }, []);
  const theme = useTheme();

  return (
    <PartnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <TopMenu />
      <SideMenu />
      <PartnerContent />

      <Footer />
    </PartnerContainer>
  );
}

export default Partner;

const PartnerContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
