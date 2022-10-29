import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home/Index";

function MyRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Home />} />
      <Route path="/contato/:contact" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
