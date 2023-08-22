import React from "react";
import styled from "styled-components";
import AvesData from "../data/AvesData";

const AvesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.2rem;
  margin-top: 7.6rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const AveCard = styled.div`
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

const AveImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  margin-bottom: 10px;
  border-bottom: 1px solid #dddddd4a;
`;

const Aves = ({ tema }) => {
  return (
    <AvesContainer tema={tema}>
      <h2>Aves que encontrarás en Valdivia</h2>
      {AvesData.map((ave) => (
        <AveCard key={ave.id} tema={tema}>
          <AveImage src={ave.imagen} alt={ave.nombre} />
          <h3>{ave.nombre}</h3>
          <p>({ave.nombre_cientifico})</p>
        </AveCard>
      ))}
    </AvesContainer>
  );
};

export default Aves;
