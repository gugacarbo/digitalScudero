import styled from "styled-components";
import PartnersHome from "./PartnersHome";
import ShowPartners from "./ShowPartners";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
function PartnersContent() {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
      offset: 0,
    });
  }, []);
  return (
    <PartnersContainer>
      <PartnersHome />
      <ShowPartners />
    </PartnersContainer>
  );
}

const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default PartnersContent;
