import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import AppContextProvider from "./context/AppContextProvider";
import SplashScreen from "./SplashScreen";
import LoadingCover from "./LoadingCover";

function App() {
  return (
    <AppContextProvider>
      {/* <SplashScreen /> */}
      <LoadingCover />
      <Router>
        <Routes />
      </Router>
    </AppContextProvider>
  );
}

export default App;
