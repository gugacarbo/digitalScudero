import { MainContainer } from "../../Styled";
import Button from "./components/Button";
import HowDoIcons from "./components/HowDoIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import { ReactComponent as DotsSvg } from "../../../assets/services/ServiceDots.svg";
import styled from "styled-components";

function HowDo() {
  return (
    <MainContainer bg="black" id="HowWeDo">
      <Title />
      <Text />
      <Dots />
      <HowDoIcons />
      <Button />
    </MainContainer>
  );
}

const Dots = styled(DotsSvg)`
  width: 25%;
  opacity: 0.5;
  margin-bottom: 3rem;
`;

export default HowDo;
