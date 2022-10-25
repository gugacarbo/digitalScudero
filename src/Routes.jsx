import { Routes, Route } from "react-router-dom";

import Home from "./Home/Index";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
