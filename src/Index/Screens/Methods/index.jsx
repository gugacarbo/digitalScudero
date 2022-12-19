import styled, { useTheme } from "styled-components";
import MethodsContent from "./MethodsContent";

import { motion } from "framer-motion";
import ScreenComponents from "../../components/ScreenComponents";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Helmet from "../../util/Helmets";

function Methods() {
  const theme = useTheme();
  useEffect(() => {
    scroller.scrollTo("MethodsHome", {
      duration: 0,
    });
  }, []);
  return (
    <AppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <Helmet name="methods" />

      <MethodsContent />
      <ScreenComponents />
    </AppContainer>
  );
}

export default Methods;

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
