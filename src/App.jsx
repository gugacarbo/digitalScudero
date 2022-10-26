import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import AppContext from "./context/AppContext";
import SplashScreen from "./SplashScreen";
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
