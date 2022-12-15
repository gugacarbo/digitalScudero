import { MainContainer } from "../../../../Styled";
import Button from "./components/Button";
import HowDoIcons from "./components/HowDoIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import styled from "styled-components";
import { Dots } from "../HomeStyled";
function HowDo() {
  return (
    <HowDoContainer bg="black" id="HowWeDo">
      <Title />
      <Dots />
      <Text />
      <HowDoIcons />
      <Button />
    </HowDoContainer>
  );
}

const HowDoContainer = styled(MainContainer)`
  @media (max-width: 414px) {
    gap: 0;
  }
`;

export default HowDo;
