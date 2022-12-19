import styled, { useTheme } from "styled-components";
import TopMenu from "../../components/TopMenu";
import SideMenu from "../../components/SideMenu";
import CasesContent from "./CasesContent";

import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import ScreenComponents from "../../components/ScreenComponents";
import Helmet from "../../util/Helmets";

function Cases() {
  const theme = useTheme();

  return (
    <AppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <Helmet name="cases" />

      <CasesContent />
      <ScreenComponents />
    </AppContainer>
  );
}

export default Cases;

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
