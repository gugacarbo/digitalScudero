import styled from "styled-components";
import BackButton from "./components/BackButton";
import CasesBox from "./components/CasesBox";

function Cases() {
  return (
    <CasesContainer>
      <BackButton />
      <CasesBox />
    </CasesContainer>
  );
}

const CasesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  place-items: center;
  display: grid;
  grid-template-columns: 100%;
  padding-top: 15vh;
  padding-bottom: 25vh;
  grid-template-rows: auto auto auto;
  row-gap: 4em;
  &::before {
    content: "";
    position: absolute;
    top: -0;
    z-index: 5;
    left: 0;
    width: 100%;
    height: 8vh;
    pointer-events: none;
    background-image: linear-gradient(
      ${({ theme }) => theme.background},
      ${({ theme }) => theme.color.white + "00"}
    );
  }

  @media (max-width: 768px) {
    row-gap: 2rem;

    padding-bottom: 15vh;
  }
  @media (max-width: 520px) {
    padding-bottom: 10vh;
  }
  @media (max-width: 414px) {
  }
`;

export default Cases;
