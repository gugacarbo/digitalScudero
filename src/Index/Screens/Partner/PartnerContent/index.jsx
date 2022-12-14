import { useContext } from "react";
import styled from "styled-components";
import PartnerHome from "./PartnerHome";
import ShowPartner from "./ShowPartner";
import LoadingContext from "../../../../context/LoadingContext";

function PartnerContent({ partnerItem }) {
  const { setLoading } = useContext(LoadingContext);

  if (!partnerItem.to) {
    setLoading(1);
    return <></>;
  }
  setLoading(0);

  return (
    <PartnerContainer>
      <PartnerHome
        text={partnerItem.text}
        title={partnerItem.title}
        logo={partnerItem.logo}
      />
      <ShowPartner partnerCases={partnerItem.partnerCases} />
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
