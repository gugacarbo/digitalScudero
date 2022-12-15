import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import PartnerContent from "./PartnerContent";
import { useEffect, useState } from "react";
import ScreenComponents from "../../components/ScreenComponents";
import { getPartner } from "../../util/api";
import { Navigate, useParams } from "react-router-dom";

function Partner() {
  const theme = useTheme();
  const { partnerName } = useParams();
  const [partner, setPartner] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getPartner(partnerName)
      .then(({ status, data, ...res }) => {
        if (status == 200) {
          setPartner(data);
        } else {
          console.log(res);
          //alert("ERRO");
        }
      })
      .catch((e) => {
        console.log("ERRO", e);
      });
  }, []);

  if (!partner || !partnerName) return <Navigate to="/404" />;

  return (
    <PartnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: theme.screen.transition.x2 }}
    >
      <PartnerContent partnerItem={partner} />
      <ScreenComponents />
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
