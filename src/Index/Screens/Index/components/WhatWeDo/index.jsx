import { MainContainer } from "../../../../Styled";
import Button from "./components/Button";
import ServiceIcons from "./components/ServiceIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import styled from "styled-components";
import { Dots } from "../HomeStyled";

function WhatWeDo() {
  return (
    <WhatWeDoContainer bg="white" id="WhatWeDo">
      <Title />
      <Text />
      <Dots />
      <ServiceIcons />
      <Button />
    </WhatWeDoContainer>
  );
}

const WhatWeDoContainer = styled(MainContainer)`
  @media (max-width: 768px) {
    gap: 1rem;
  }
  @media (max-width: 414px) {
    justify-content: center;
    gap: 2rem;
  }
  @media (max-width: 380px) {
    gap: 1rem;
  }
  @media (max-width: 280px) {
    justify-content: center;
  }
`;
export default WhatWeDo;
