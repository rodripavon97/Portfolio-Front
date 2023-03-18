import { useState } from "react";
import NavBar from "./components/Navbar";
import { navbarLinks } from "./constants/routes";
import AppRouter from "./Routes";
function App() {
  return (
    <>
   
      <AppRouter />
    </>
  );
}

export default App;
