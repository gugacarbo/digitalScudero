import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import PartnersContent from "./PartnersContent";
import ScreenComponents from "../../components/ScreenComponents";
import Helmet from "../../util/Helmets";

function Partners() {
  const theme = useTheme();

  return (
    <AppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <Helmet name="partners" />

      <PartnersContent />
      <ScreenComponents />
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
