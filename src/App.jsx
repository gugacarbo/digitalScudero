import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import SplashScreen from "./SplashScreen";
import AppContext from "./context/AppContext";
function App() {
  return (
    <AppContext>
      <SplashScreen />
      <Router>
        <Routes />

      </Router>
    </AppContext>
  );
}

export default App;
