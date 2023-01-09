
import styled from "styled-components";
import CasesHome from "./CasesHome";
import Cases from "./Cases";

function CasesContent() {


  return (
    <CasesContainer>
      <CasesHome />
      <Cases />
    </CasesContainer>
  );
}

const CasesContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default CasesContent;
