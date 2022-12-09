import { useEffect } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";
import CaseHome from "./CaseHome";
import ShowCase from "./ShowCase";

function CaseContent({ caseItem }) {
  // useEffect(() => {
  //   scroller.scrollTo("CaseHome", {
  //     duration: 0,
  //   });
  // }, []);

  return (
    <CaseContainer>
      <CaseHome
        text={caseItem.text}
        title={caseItem.title}
        projectLink={caseItem.link}
        logo={caseItem.logo}
        
      />
      <ShowCase img={caseItem.caseImage} />
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
