import { Routes, Route, useLocation } from "react-router-dom";
import ContactForm from "./Home/ContactForm";
import Home from "./Home";
import Services from "./Home/Services";
import Cases from "./Home/Cases";

function MyRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Home />} />
      <Route path="/:screen" element={<Home />} />
      <Route path="/contato/:contact" element={<ContactForm />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/parceiros" element={<div>Parceiros</div>} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
