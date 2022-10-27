import { MainContainer } from "../../Styled";
import Button from "./components/Button";
import HowDoIcons from "./components/HowDoIcons";
import Text from "./components/Text";
import Title from "./components/Title";
import { ReactComponent as DotsSvg } from "../../../assets/services/ServiceDots.svg";
import styled from "styled-components";

function HowDo() {
  return (
    <MainContainer bg="black">
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
  margin: 3rem 0;
`;

export default HowDo;
