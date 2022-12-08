import styled, { useTheme } from "styled-components";
import TopMenu from "../../components/TopMenu";
import SideMenu from "../../components/SideMenu";

import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import PartnersContent from "./PartnersContent";

function Partners() {
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
      <PartnersContent />

      <Footer />
    </AppContainer>
  );
}

export default Partners;

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
