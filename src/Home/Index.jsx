import styled from "styled-components";
import HomeScreen from "./components/Home";
import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";
import WhoIs from "./components/WhoIs";
import WhatWeDo from "./components/WhatWeDo";
import HowDo from "./components/HowWeDo";
import Mailing_Contact from "./components/Mailing_Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <AppContainer>
      <TopMenu />
      <SideMenu />
      <HomeScreen />
      <WhoIs />
      <WhatWeDo />
      <HowDo />
      <Mailing_Contact />
      <Footer />
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
