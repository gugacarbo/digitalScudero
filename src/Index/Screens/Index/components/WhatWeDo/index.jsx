import { MainContainer } from "../../../../Styled";
import Button from "./components/Button";
import ServiceIcons from "./components/ServiceIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import { ReactComponent as DotsSvg } from "../../../../../assets/services/ServiceDots.svg";
import styled from "styled-components";

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

const Dots = styled(DotsSvg)`
  width: 32%;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media (max-width: 414px) {
    width: 60%;
    margin: 0;
  }
`;

const WhatWeDoContainer = styled(MainContainer)`
  @media (max-width: 768px) {
    gap: 1rem;
  }
  @media (max-width: 414px) {
    justify-content: space-evenly;
    gap: 0rem;
  }
  @media (max-width: 380px) {
  }
  @media (max-width: 280px) {
    gap: 1rem;
  }
`;
export default WhatWeDo;
