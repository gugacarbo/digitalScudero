import { useEffect } from "react";
import { scroller } from "react-scroll";
import styled from "styled-components";
import MethodsHome from "./MethodsHome";
import Methods from "./Methods";

function MethodsContent() {
  return (
    <MethodsContainer>
      <MethodsHome />
      <Methods />
    </MethodsContainer>
  );
}

const MethodsContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default MethodsContent;
