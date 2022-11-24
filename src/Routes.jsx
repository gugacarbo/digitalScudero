import { Routes, Route, useLocation } from "react-router-dom";
import ContactForm from "./Home/ContactForm";
import Home from "./Home";
import Services from "./Home/Services";
import Cases from "./Home/Cases";
import Partners from "./Home/Partners";
import { AnimatePresence } from "framer-motion";
import Case from "./Home/Case";

function MyRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/:screen" element={<Home />} />
        <Route path="/contato/:contact" element={<ContactForm />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/case/:case" element={<Case />} />
        <Route path="/parceiros" element={<Partners />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default MyRoutes;
