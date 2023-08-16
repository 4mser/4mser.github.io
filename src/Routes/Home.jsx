import React from "react";
import SearchBar from "../components/SearchBar";
import Avisos from "../components/Avisos";
import Lineas from "../components/Lineas";
import Ofertas from "../components/Ofertas";
import PsyQuests from "../components/PsyQuests";

const Home = ({ tema }) => {
  return (
    <div>
      {/* <SearchBar tema={tema}></SearchBar> */}

      <Avisos tema={tema}></Avisos>

      {/* <Lineas tema={tema}></Lineas> */}

      <PsyQuests tema={tema}></PsyQuests>
      {/* <Ofertas tema={tema}></Ofertas> */}
    </div>
  );
};

export default Home;
