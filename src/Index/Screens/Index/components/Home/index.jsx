import styled from "styled-components";
import { MainContainer } from "../../../../Styled";
import BackgroundImage from "../../../../../assets/Home-Background.jpg";
import HomeText from "../HomeText";
import SubText from "../SubText";
import HomeButton from "../HomeButton";
import Socials from "../../../../components/Socials";

function HomeScreen() {
  return (
    <HomeContainer id="Home">
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
  grid-template-rows: 10% 10% 40% 13% 12% 10% 10%;
  grid-template-areas:
    ".     .      . ."
    ".     .      . Socials"
    ".  HomeText  . Socials"
    ".  SubText   . Socials"
    ". HomeButton . Socials"
    ".     .      . Socials"
    ".     .      . .";

  @media screen and (max-width: 768px) {
    background-size: 170% 100%;
    background-position: right 0vh;
    grid-template-columns: 15% auto 5% 12%;
  }

  @media (max-width: 520px) {
    background-size: 180% 100%;
    background-position: right 5vh;
    place-items: center;

    grid-template-columns: 7% 1fr 7%;
    grid-template-rows: 10% 40% 18% 17% 10% 1fr;
    grid-template-areas:
      ".     .      . "
      ".  HomeText  . "
      ".  SubText   . "
      ". HomeButton . "
      ".  Socials   . "
      ".     .      . ";
  }
`;

export default HomeScreen;
