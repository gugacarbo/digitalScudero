import { MainContainer } from "../../Styled";
import Button from "./components/Button";
import ServiceIcons from "./components/ServiceIcons";
import Text from "./components/Text";
import Title from "./components/Title";
function WhatWeDo() {
  return (
    <MainContainer bg="white">
      <Title />
      <Text />
      <ServiceIcons />
      <Button />
    </MainContainer>
  );
}

export default WhatWeDo;
