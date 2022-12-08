import styled from "styled-components";
import Scroller from "./Scroller";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

function PartnersAvaliations() {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
      offset: 0,
    });
  }, []);

  return (
    <AvaliationsContainer>
      <Scroller />
    </AvaliationsContainer>
  );
}

const AvaliationsContainer = styled.div`
  width: 60%;
`;

export default PartnersAvaliations;
