import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Bg from "./components/Bg";
import Nav from "./components/Nav";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./Routes/Home";
import BottomNav from "./components/BottomNav";
import Perfil from "./components/Perfil";

function App() {
  //Cambio de tema
  const [tema, setTema] = useState("dark");

  const handleTemaChange = () => {
    if (tema === "dark") {
      setTema("light");
    } else {
      setTema("dark");
    }
  };

  //Abrir menu
  const [MenuOpen, setMenuOpen] = useState("closed");

  const handleMenuChange = () => {
    if (MenuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Bg tema={tema}></Bg>
        <Nav
          tema={tema}
          handleTemaChange={handleTemaChange}
          menuOpen={MenuOpen}
          handleMenuChange={handleMenuChange}
        ></Nav>

        <BottomNav tema={tema}></BottomNav>

        <Routes>
          <Route path="/" element={<Home tema={tema}></Home>}></Route>

          <Route path="/perfil" element={<Perfil tema={tema}></Perfil>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
