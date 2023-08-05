// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Bg from "./components/Bg";
// import Nav from "./components/Nav";

// import ScrollToTop from "./components/ScrollToTop";
// import Home from "./Routes/Home";
// import BottomNav from "./components/BottomNav";
// import Perfil from "./components/Perfil";
// import SignPage from "./components/SignPage";

// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "./styles/BottomNavStyle";

// function App() {
//   //Cambio de tema
//   const [tema, setTema] = useState("dark");

//   const handleTemaChange = () => {
//     if (tema === "dark") {
//       setTema("light");
//     } else {
//       setTema("dark");
//     }
//   };

//   //Abrir menu
//   const [MenuOpen, setMenuOpen] = useState("closed");

//   const handleMenuChange = () => {
//     if (MenuOpen === "closed") {
//       setMenuOpen("open");
//     } else {
//       setMenuOpen("closed");
//     }
//   };

//   const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
//     useAuth0();

//   return (
//     <>
//       {isAuthenticated ? (
//         <BrowserRouter>
//           <ScrollToTop></ScrollToTop>
//           <Bg tema={tema}></Bg>
//           <Nav
//             tema={tema}
//             handleTemaChange={handleTemaChange}
//             menuOpen={MenuOpen}
//             handleMenuChange={handleMenuChange}
//           ></Nav>

//           <BottomNav tema={tema}></BottomNav>

//           <Routes>
//             <Route path="/" element={<Home tema={tema}></Home>}></Route>

//             <Route
//               path="/perfil"
//               element={<Perfil tema={tema}></Perfil>}
//             ></Route>
//           </Routes>
//         </BrowserRouter>
//       ) : }
//       <SignPage></SignPage>
//       <Button tema={tema} onClick={() => loginWithRedirect()}>
//         Iniciar Sesión
//       </Button>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Bg from "./components/Bg";
import Nav from "./components/Nav";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./Routes/Home";
import BottomNav from "./components/BottomNav";
import Perfil from "./components/Perfil";
import SignPage from "./components/SignPage";

import { useAuth0 } from "@auth0/auth0-react";

import { styled } from "styled-components";
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

  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  if (isLoading) {
    // Mostrar algo mientras se verifica la autenticación
    return <div>Iniciando Sesión</div>;
  }

  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Bg tema={tema}></Bg>
      {isAuthenticated ? (
        <>
          <Nav
            tema={tema}
            handleTemaChange={handleTemaChange}
            menuOpen={MenuOpen}
            handleMenuChange={handleMenuChange}
          ></Nav>
          <BottomNav tema={tema}></BottomNav>
          <Routes>
            <Route path="/" element={<Home tema={tema}></Home>}></Route>
            <Route
              path="/perfil"
              element={<Perfil tema={tema}></Perfil>}
            ></Route>
          </Routes>
        </>
      ) : (
        <>
          <SignPage></SignPage>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
