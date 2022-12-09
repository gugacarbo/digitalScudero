import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import Button from "./components/Button";
import Text from "./components/Text";
import Title from "./components/Title";
function WhoIs() {
  return (
    <WhoisContainer bg="black" id="WhoIs">
      <Title />
      <Text />
      <Button />
    </WhoisContainer>
  );
}

const WhoisContainer = styled(MainContainer)`
  @media (max-width: 768px) {
    gap: 5rem;
  }
`;

export default WhoIs;
