import React from "react";
import Avisos from "../components/Avisos";
import Categorias from "../components/Categorias";
import Explora from "../components/Explora";
import Interes from "../components/Interes";
import InteresCards from "../components/InteresCards";

const Home = ({ tema }) => {
  return (
    <div>
      <Avisos tema={tema}></Avisos>
      <Categorias tema={tema}></Categorias>
      <Explora tema={tema}></Explora>
      <Interes tema={tema}></Interes>
      {/* <InteresCards tema={tema}></InteresCards> */}
    </div>
  );
};

export default Home;
