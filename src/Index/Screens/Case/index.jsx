import styled, { useTheme } from "styled-components";
import TopMenu from "../../components/TopMenu";
import SideMenu from "../../components/SideMenu";

import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import CaseContent from "./CaseContent";
import { getCases } from "../../util/api";
import { useParams } from "react-router-dom";

function Case() {
  const cases = getCases();
  const { caseName } = useParams();

  const caseItem = cases.find((item) => {
    return item.to == caseName;
  });

  const theme = useTheme();

  return (
    <CaseContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <TopMenu />
      <SideMenu />
      <CaseContent caseItem={caseItem} />

      <Footer />
    </CaseContainer>
  );
}

export default Case;

const CaseContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
