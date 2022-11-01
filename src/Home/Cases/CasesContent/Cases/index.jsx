import styled from "styled-components";
import BackButton from "./components/BackButton";
import CasesBox from "./components/CasesBox";
function Cases() {
  return (
    <CasesContainer>
      <BackButton />
      <CasesBox>asdasd</CasesBox>
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

  display: grid;
  grid-template-columns: 100%;
  padding: 5vh 0;
  grid-template-rows: 20vh 20vh auto;

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
`;

export default Cases;
