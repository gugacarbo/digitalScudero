import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import CaseContent from "./CaseContent";
import { getCase } from "../../util/api";
import { useParams } from "react-router-dom";
import ScreenComponents from "../../components/ScreenComponents";
import { useState, useEffect } from "react";

function Case() {
  const [caseItem, setCaseItem] = useState([]);
  const { caseName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    getCase(caseName)
      .then(({ status, data }) => {
        if (status == 200) {
          setCaseItem(data);
        } else {
          alert("ERRO");
        }
      })
      .catch(() => {
        alert("ERRO");
      });
  }, []);

  const theme = useTheme();

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
