import React from "react";
import Categorias from "../components/Categorias";
import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import CategoriasBuscar from "../components/CategoriasBuscar";

const Buscar = ({ tema }) => {
  return (
    <div>
      <SearchBar tema={tema}></SearchBar>
      <CategoriasBuscar tema={tema}></CategoriasBuscar>
    </div>
  );
};

export default Buscar;
