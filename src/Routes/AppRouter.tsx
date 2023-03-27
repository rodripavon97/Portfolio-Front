import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";
import { navbarLinks, PATH_NAME } from "../constants/routes";

import Home from "../pages/Home";
import Skills from "../pages/Skills";

const AppRouter: React.FC = () => {
  return (
    <>

      <NavBar navLinks={navbarLinks} />
      <Routes>
        <Route>
          <Route path={PATH_NAME.HOME}  element={<Home />} />
          <Route path={PATH_NAME.SKILLS} element={<Skills />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default AppRouter;
