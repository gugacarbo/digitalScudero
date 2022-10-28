import { MainContainer } from "../../Styled";
import Button from "./components/Button";
import ServiceIcons from "./components/ServiceIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import { ReactComponent as DotsSvg } from "../../../assets/services/ServiceDots.svg";
import styled from "styled-components";

function WhatWeDo() {
  return (
    <MainContainer bg="white" id="WhatWeDo">
      <Title />
      <Text />
      <Dots />
      <ServiceIcons />
      <Button />
    </MainContainer>
  );
}

const Dots = styled(DotsSvg)`
  width: 25%;
  margin: 2rem 0;
`;

export default WhatWeDo;
