import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Bg from "./components/Bg";
import Nav from "./components/Nav";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./Routes/Home";
import Perfil from "./components/Perfil";
import SignPage from "./components/SignPage";

import { useAuth0 } from "@auth0/auth0-react";

import { styled } from "styled-components";
import Buscar from "./Routes/Buscar";
import Nada from "./components/Nada";
import ExploraData from "./data/ExploraData";

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
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Bg tema={tema}></Bg>
      <>
        <Nav
          tema={tema}
          handleTemaChange={handleTemaChange}
          menuOpen={MenuOpen}
          handleMenuChange={handleMenuChange}
        ></Nav>
        <Routes>
          <Route path="/" element={<Home tema={tema}></Home>}></Route>
          <Route path="/perfil" element={<Perfil tema={tema}></Perfil>}></Route>

          <Route path="/buscar" element={<Buscar tema={tema}></Buscar>}></Route>

          <Route path="/explorar" element={<Nada tema={tema}></Nada>}></Route>

          <Route path="/guardado" element={<Nada tema={tema}></Nada>}></Route>

          <Route path="/tienda" element={<Nada tema={tema}></Nada>}></Route>

          {ExploraData.map((explora) => (
            <Route
              key={explora.id}
              path={`/${explora.url}`}
              element={<Nada tema={tema} />}
            />
          ))}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
