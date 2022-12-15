import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import CaseContent from "./CaseContent";
import { getCase } from "../../util/api";
import { Navigate, useParams } from "react-router-dom";
import ScreenComponents from "../../components/ScreenComponents";
import { useState, useEffect } from "react";

function Case() {
  const [caseItem, setCaseItem] = useState([]);
  const { caseName } = useParams();
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    getCase(caseName)
      .then(({ status, data, ...res }) => {
        if (status == 200) {
          setCaseItem(data);
        } else {
          console.log(res);
          //alert("ERRO");
        }
      })
      .catch((e) => {
        console.log("ERRO", e);
      });
  }, []);

  if (!caseItem || !caseName) return <Navigate to="/404" />;

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
