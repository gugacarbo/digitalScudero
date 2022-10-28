import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home/Index";
import ContactForm from "./Home/ContactForm";

function MyRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/contato/:contact" element={<ContactForm />} />
    </Routes>
  );
}

export default MyRoutes;
