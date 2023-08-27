import React from "react";
import { styled } from "styled-components";
import News from "../../components/AstroNews";
import CineBanner from "../../components/CineBanner";
import Cartelera from "../../components/Cartelera";

const Cine = ({ tema }) => {
  return (
    <div style={{ paddingBottom: "5rem" }}>
      <CineBanner tema={tema}></CineBanner>
      <br />
      <Cartelera tema={tema}></Cartelera>
    </div>
  );
};

export default Cine;
