import { lazy, Suspense, useContext, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Screens/Index";
import LoadingCover from "../LoadingCover";

const ContactForm = lazy(() => import("./Screens/ContactForm"));
const Services = lazy(() => import("./Screens/Services"));
const Cases = lazy(() => import("./Screens/Cases"));
const Case = lazy(() => import("./Screens/Case"));
const Partners = lazy(() => import("./Screens/Partners"));
const Partner = lazy(() => import("./Screens/Partner"));
const Methods = lazy(() => import("./Screens/Methods"));

function MyRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />

        <Route
          path="/contato"
          exact
          element={<Navigate to="/" state={{ to: "Mailing" }} />}
        />
        <Route
          path="/contato/:contact"
          element={<LazyRoute element={<ContactForm />} />}
        />
        <Route
          path="/servicos"
          element={<LazyRoute element={<Services />} />}
        />
        <Route path="/metodos" element={<LazyRoute element={<Methods />} />} />
        <Route path="/cases" element={<LazyRoute element={<Cases />} />} />
        <Route
          path="/case/:caseName"
          element={<LazyRoute element={<Case />} />}
        />
        <Route
          path="/parceiros"
          element={<LazyRoute element={<Partners />} />}
        />
        <Route
          path="/parceiro/:partnerName"
          element={<LazyRoute element={<Partner />} />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default MyRoutes;

const LazyRoute = ({ element }) => {
  return (
    <Suspense fallback={<LoadingCover constloading={1} />}>{element}</Suspense>
  );
};
