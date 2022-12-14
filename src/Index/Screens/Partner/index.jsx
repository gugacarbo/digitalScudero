import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import PartnerContent from "./PartnerContent";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";
import ScreenComponents from "../../components/ScreenComponents";
import { getPartner } from "../../util/api";
import { useParams } from "react-router-dom";

function Partner() {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
      offset: 0,
    });
  }, []);

  const theme = useTheme();

  const { partnerName } = useParams();

  const [partner, setPartner] = useState({});

  useEffect(() => {
    getPartner(partnerName)
      .then(({ status, data }) => {
        if (status == 200) {
          setPartner(data);
        } else {
          alert("ERRO");
        }
      })
      .catch(() => {
        alert("ERRO");
      });
  }, []);

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
