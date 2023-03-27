import { useState } from "react";
import NavBar from "./components/Navbar";
import { navbarLinks } from "./constants/routes";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AppRouter from "./Routes";
function App() {
  return (
    <>
      <AppRouter />
      <Home />
  
      <Projects />
      <Skills />

    </>
  );
}

export default App;
