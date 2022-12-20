import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./Routes";
import AppContextProvider from "./context/AppContextProvider";
import SplashScreen from "./SplashScreen";
import Alert from "./Index/components/Alert";

function App() {
  return (
    <AppContextProvider>
      <SplashScreen />
      <Alert />
      <Router>
        <MyRoutes />
      </Router>
    </AppContextProvider>
  );
}

export default App;
