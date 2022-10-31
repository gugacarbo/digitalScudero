import { useEffect } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";
import Services from "./components/Services";
import ServicesHome from "./components/ServicesHome";

function ServicesContent() {
  useEffect(() => {
    scroller.scrollTo("ServicesHome", {
      duration: 0,
    });
  }, []);

  return (
    <ServicesContainer>
      <ServicesHome />
      <Services />
    </ServicesContainer>
  );
}

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default ServicesContent;
