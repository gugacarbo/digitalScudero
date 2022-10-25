import styled from "styled-components";
import HomeScreen from "./components/Home";
import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";

function Home() {
  return (
    <AppContainer>
      <TopMenu />
      <SideMenu />
      <HomeScreen />
      <HomeScreen />
    </AppContainer>
  );
}

export default Home;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
