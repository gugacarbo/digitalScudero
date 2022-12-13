import { useEffect } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";
import PartnerHome from "./PartnerHome";
import ShowPartner from "./ShowPartner";

function PartnerContent({ partnerItem }) {
  // useEffect(() => {
  //   scroller.scrollTo("PartnerHome", {
  //     duration: 0,
  //   });
  // }, []);


  return (
    <PartnerContainer>
      <PartnerHome
        text={partnerItem.text}
        title={partnerItem.title}
        logo={partnerItem.logo}
      />
      <ShowPartner projectLink={partnerItem.link} />
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
  padding-bottom: 7rem;
`;

export default PartnerContent;
