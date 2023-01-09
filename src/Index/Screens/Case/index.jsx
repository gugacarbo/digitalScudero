import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import CaseContent from "./CaseContent";
import { Navigate, useParams } from "react-router-dom";
import ScreenComponents from "../../components/ScreenComponents";
import { useState, useEffect, useContext } from "react";
import DataContext from "../../../context/DataContext";

function Case() {
  const [caseItem, setCaseItem] = useState([]);
  const { caseName } = useParams();
  const theme = useTheme();
  const { getCase } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCaseItem(getCase(caseName))
    
  }, []);

  if (!caseItem || !caseName) return <Navigate to="/404" state={{to : b}} />;

  return (
    <CaseContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <CaseContent caseItem={caseItem} />
      <ScreenComponents />
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
