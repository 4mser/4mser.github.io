import React from "react";
import Avisos from "../components/Avisos";
import Categorias from "../components/Categorias";
import Explora from "../components/Explora";
import Interes from "../components/Interes";
import InteresCards from "../components/InteresCards";
import Footer from "../components/Footer";
import NasaAPOD from "../components/NasaAPOD";

const Home = ({ tema }) => {
  return (
    <div>
      <Avisos tema={tema}></Avisos>
      <Categorias tema={tema}></Categorias>
      {/* <NasaAPOD></NasaAPOD> */}
      <Explora tema={tema}></Explora>
      <Interes tema={tema}></Interes>
      <Footer tema={tema}></Footer>
    </div>
  );
};

export default Home;
