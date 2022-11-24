import { useEffect } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";
import PartnersHome from "./PartnersHome";
import ShowPartners from "./ShowPartners";

function PartnersContent() {
  // useEffect(() => {
  //   scroller.scrollTo("PartnersHome", {
  //     duration: 0,
  //   });
  // }, []);

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
