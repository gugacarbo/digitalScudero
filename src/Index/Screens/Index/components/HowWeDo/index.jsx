import { MainContainer } from "../../../../Styled";
import Button from "./components/Button";
import HowDoIcons from "./components/HowDoIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import { ReactComponent as DotsSvg } from "../../../../../assets/services/ServiceDots.svg";
import styled from "styled-components";

function HowDo() {
  return (
    <HowDoContainer bg="black" id="HowWeDo">
      <Title />
      <Text />
      <Dots />
      <HowDoIcons />
      <Button />
    </HowDoContainer>
  );
}

const HowDoContainer = styled(MainContainer)`
  @media (max-width: 414px) {
    gap: 1rem;
  }
`;

const Dots = styled(DotsSvg)`
  width: 25%;
  opacity: 0.5;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    width: 35%;
  }
  @media (max-width: 414px) {
    width: 65%;
  }
`;

export default HowDo;