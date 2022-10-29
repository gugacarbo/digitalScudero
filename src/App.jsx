import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import AppContextProvider from "./context/AppContextProvider";
import SplashScreen from "./SplashScreen";
function App() {
  return (
    <AppContextProvider>
      {/* <SplashScreen /> */}
      <Router>
        <Routes />
      </Router>
    </AppContextProvider>
  );
}

export default App;
