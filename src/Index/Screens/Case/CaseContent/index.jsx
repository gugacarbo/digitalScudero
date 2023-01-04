import styled from "styled-components";
import CaseHome from "./CaseHome";
import ShowCase from "./ShowCase";
import LoadingContext from "../../../../context/LoadingContext";
import { useContext, useEffect } from "react";
function CaseContent({ caseItem }) {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!caseItem.to) {
      setLoading(1);
    } else {
      setLoading(0);
    }
  }, [caseItem, caseItem.to]);

  if (loading || !caseItem.to) {
    return <></>;
  }

  return (
    <CaseContainer>
      <CaseHome
        text={caseItem.text}
        title={caseItem.title}
        projectLink={caseItem.link}
        logo={caseItem.logo}
      />
      <ShowCase img={caseItem.caseImage} alt={caseItem.title} />
    </CaseContainer>
  );
}

const CaseContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default CaseContent;
