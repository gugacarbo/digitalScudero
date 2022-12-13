import styled from "styled-components";
import CaseItem from "./CaseItem";

import { getCases } from "../../../../../../util/api";

function CasesBox() {
  const cases = getCases();

  return (
    <BoxContent id="CasesContainer">
      {cases.map((value, index, array) => (
        <CaseItem
          key={value.title + index}
          to={value.to}
          title={value.title}
          img={value.bg}
          logo={value.logo}
        />
      ))}
    </BoxContent>
  );
}

export default CasesBox;

const BoxContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
  @media (max-width: 414px) {
  }
`;
