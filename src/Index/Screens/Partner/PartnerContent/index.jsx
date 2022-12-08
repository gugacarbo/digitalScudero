import { useEffect } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";
import PartnerHome from "./PartnerHome";
import ShowPartner from "./ShowPartner";

function PartnerContent() {
  // useEffect(() => {
  //   scroller.scrollTo("PartnerHome", {
  //     duration: 0,
  //   });
  // }, []);

  return (
    <PartnerContainer>
      <PartnerHome />
      <ShowPartner />
    </PartnerContainer>
  );
}

const PartnerContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default PartnerContent;
