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
  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 85%;
  }
  @media (max-width: 414px) {
    width: 98%;
  }
`;

export default PartnersAvaliations;
