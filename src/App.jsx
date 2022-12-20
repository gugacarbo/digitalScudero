import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./Routes";
import AppContextProvider from "./context/AppContextProvider";
import SplashScreen from "./SplashScreen";

function App() {
  return (
    <AppContextProvider>
      <SplashScreen />
      <Router>
        <MyRoutes />
      </Router>
    </AppContextProvider>
  );
}

export default App;
