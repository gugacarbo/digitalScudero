import { Routes, Route, useLocation } from "react-router-dom";
import ContactForm from "./Home/ContactForm";
import Home from "./Home";

function MyRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Home />} />
      <Route path="/contato/:contact" element={<ContactForm />} />
    </Routes>
  );
}

export default MyRoutes;
