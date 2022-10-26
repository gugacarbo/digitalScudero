import styled from "styled-components";
import { MainContainer } from "../../Styled";
import BackgroundImage from "../../../assets/Home-Background.jpg";
import HomeText from "./components/HomeText";
import SubText from "./components/SubText";
import HomeButton from "./components/HomeButton";
import Socials from "./components/Socials";

function HomeScreen() {
  return (
    <HomeContainer>
      <HomeText />
      <SubText />
      <HomeButton />
      <Socials />
    </HomeContainer>
  );
}

const HomeContainer = styled(MainContainer)`
  background-image: url(${BackgroundImage});
  background-size: 95%;
  background-position: right;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 15% 50% 23% 12%;
  grid-template-rows: 10% 10% 40% 10% 7% 13% 10%;
  grid-template-areas:
    ". . . ."
    ". . . Socials"
    ". HomeText . Socials"
    ". SubText . Socials"
    ". HomeButton . Socials"
    ". . . Socials"
    ". . . .";
`;

export default HomeScreen;
