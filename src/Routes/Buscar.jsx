import React from "react";
import Categorias from "../components/Categorias";
import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import CategoriasBuscar from "../components/CategoriasBuscar";
import ExploraAll from "../components/ExploraAll";

const Buscar = ({ tema }) => {
  return (
    <div>
      <CategoriasBuscar tema={tema}></CategoriasBuscar>
    </div>
  );
};

export default Buscar;
