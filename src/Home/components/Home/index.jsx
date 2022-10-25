import styled from "styled-components";
import { MainContainer } from "../../Styled";
import BackgroundImage from "../../../assets/Home-Background.jpg";

function HomeScreen() {
  return (
    <HomeContainer>
      <h1>Home</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled(MainContainer)`
  background-image: url(${BackgroundImage});
  background-size: 95%;
  background-position: right;
  background-repeat: no-repeat;
`;

export default HomeScreen;
