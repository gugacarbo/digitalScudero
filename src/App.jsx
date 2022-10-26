import { BrowserRouter as Router } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Routes from "./Routes";
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
