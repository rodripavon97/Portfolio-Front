import { useState } from "react";
import NavBar from "./components/Navbar";
import { navbarLinks } from "./constants/routes";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AppRouter from "./Routes";
import React from "react";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <AppRouter />
      <Home />
  
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
