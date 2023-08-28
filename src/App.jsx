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
import Aves from "./components/Aves";
import Hongos from "./components/Hongos";
import Mamiferos from "./components/Mamiferos";
import NasaAPOD from "./components/NasaAPOD";
import Astronomia from "./Routes/explorar/Astronomia";
import Menu from "./components/Menu";
import Cine from "./Routes/explorar/Cine";
import Maps from "./components/Maps";
import DatabaseComponent from "./components/DatabaseComponentsRobin";
import DatabaseComponentRobin from "./components/DatabaseComponentsRobin";
import BarChart from "./components/BarChart";

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
  const [menuOpen, setMenuOpen] = useState("closed");

  const handleMenuChange = () => {
    if (menuOpen === "closed") {
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
          menuOpen={menuOpen}
          handleMenuChange={handleMenuChange}
        ></Nav>
        {/* <Menu
          tema={tema}
          menuOpen={menuOpen}
          handleMenuChange={handleMenuChange}
        ></Menu> */}
        <Routes>
          <Route path="/" element={<Home tema={tema}></Home>}></Route>
          <Route path="/perfil" element={<Perfil tema={tema}></Perfil>}></Route>

          <Route
            path="/ubicaciones"
            element={<Maps tema={tema}></Maps>}
          ></Route>

          <Route path="/guardado" element={<Nada tema={tema}></Nada>}></Route>

          <Route
            path="/tienda"
            element={<BarChart tema={tema}></BarChart>}
          ></Route>

          <Route
            path="/explorar"
            element={<Buscar tema={tema}></Buscar>}
          ></Route>

          <Route
            path="/explorar/aves-en-valdivia"
            element={<Aves tema={tema}></Aves>}
          ></Route>

          <Route
            path="/explorar/hongos-en-valdivia"
            element={<Hongos tema={tema}></Hongos>}
          ></Route>

          <Route
            path="/explorar/mamiferos-en-valdivia"
            element={<Mamiferos tema={tema}></Mamiferos>}
          ></Route>

          <Route
            path="/explorar/cielo-nocturno"
            element={<Astronomia tema={tema}></Astronomia>}
          ></Route>

          <Route
            path="/explorar/cine"
            element={<Cine tema={tema}></Cine>}
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
