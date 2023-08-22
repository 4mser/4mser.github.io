import React from "react";
import Avisos from "../components/Avisos";
import Categorias from "../components/Categorias";
import Explora from "../components/Explora";
import Interes from "../components/Interes";
import InteresCards from "../components/InteresCards";
import Footer from "../components/Footer";

const Home = ({ tema }) => {
  return (
    <div>
      <Avisos tema={tema}></Avisos>
      <Interes tema={tema}></Interes>
      <Categorias tema={tema}></Categorias>
      <Explora tema={tema}></Explora>
      <Footer tema={tema}></Footer>
    </div>
  );
};

export default Home;
