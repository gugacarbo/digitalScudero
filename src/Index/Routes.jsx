import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingContext from "../context/LoadingContext";

import Home from "./Screens/Index";
import ContactForm from "./Screens/ContactForm";
import Services from "./Screens/Services";
import Cases from "./Screens/Cases";
import Case from "./Screens/Case";
import Partners from "./Screens/Partners";
import Partner from "./Screens/Partner";
import Methods from "./Screens/Methods";

function MyRoutes() {
  const location = useLocation();
  //const { setLoading } = useContext(LoadingContext);
  //useEffect(() => setLoading(0), [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato/:contact" element={<ContactForm />} />

        <Route path="/servicos" element={<Services />} />

        <Route path="/metodos" element={<Methods />} />

        <Route path="/cases" element={<Cases />} />
        <Route path="/case/:caseName" element={<Case />} />

        <Route path="/parceiros" element={<Partners />} />
        <Route path="/parceiro/:partnerName" element={<Partner />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default MyRoutes;
