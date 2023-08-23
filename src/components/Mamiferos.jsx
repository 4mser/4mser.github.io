import React from "react";
import styled from "styled-components";
import MamiferosData from "../data/MamiferosData";
import ScrollToTopButton from "./ScrollToTopButton";

const MamiferosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.2rem;
  margin-top: 7.6rem;

  h2 {
    font-size: 1.2rem;
    width: 100%;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const MamiferoCard = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 20px;
  border: 1px solid #dddddd4a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;

  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  padding-bottom: 10px;

  h3 {
    font-size: 12px;
    font-weight: 500;
    padding-left: 10px;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }

  p {
    padding-left: 10px;
    font-size: 10px;
    font-weight: 400;
    font-style: italic;
    color: ${(props) =>
      props.tema === "dark" ? "var(--shadow)" : "var(--Item)"};
  }
`;

const MamiferoImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  margin-bottom: 10px;
  border-bottom: 1px solid #dddddd4a;
`;

const Blog = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Mamiferos = ({ tema }) => {
  return (
    <MamiferosContainer tema={tema}>
      <Blog tema={tema}>
        <h2>Mamiferos avistados en Valdivia</h2>
      </Blog>
      {MamiferosData.map((Mamifero) => (
        <MamiferoCard key={Mamifero.id} tema={tema}>
          <MamiferoImage src={Mamifero.imagen} alt={Mamifero.nombre} />
          <h3>{Mamifero.nombre}</h3>
          <p>({Mamifero.nombre_cientifico})</p>
        </MamiferoCard>
      ))}
      <ScrollToTopButton tema={tema}></ScrollToTopButton>
    </MamiferosContainer>
  );
};

export default Mamiferos;
