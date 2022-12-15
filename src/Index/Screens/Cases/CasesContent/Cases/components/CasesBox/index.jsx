import styled from "styled-components";
import CaseItem from "./CaseItem";

import { getCases } from "../../../../../../util/api";
import { useEffect, useState } from "react";

function CasesBox() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCases()
      .then(({ status, data }) => {
        if (status == 200) {
          setCases(data);
        } else {
          alert("ERRO");
        }
      })
      .catch(() => {
        alert("ERRO");
      });
  }, []);

  return (
    <BoxContent id="CasesContainer">
      {cases.length > 0 &&
        cases.map((value, index, array) => (
          <CaseItem
            key={value.title + index}
            to={value.to}
            title={value.title}
            img={value.background}
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

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 520px) {
    gap: 5%;

    width: 90%;
  }
  @media (max-width: 360px) {
    gap: 1rem;

  }
`;
