import React from "react";
import styled from "styled-components";
import AvesData from "../data/AvesData";
import ScrollToTopButton from "./ScrollToTopButton";

const AvesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1.2rem;
  padding-top: 9rem;
  gap: 20px;

  h2 {
    font-size: 1.2rem;
    width: 100%;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const AveCard = styled.div`
  width: calc(50% - 10px);
  height: 14rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;

  p {
    width: 100%;
    font-size: 10px;
    font-weight: 400;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
    opacity: 0.7;
    display: flex;
  }

  h3 {
    font-size: 12px;
    font-weight: 600;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
  }
`;

const ImagenContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
`;

const AveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Blog = styled.div`
  width: 100%;
`;

const Aves = ({ tema }) => {
  return (
    <AvesContainer tema={tema}>
      <Blog tema={tema}>
        <h2>Aves avistadas en Valdivia</h2>
      </Blog>
      {AvesData.map((ave) => (
        <AveCard key={ave.id} tema={tema}>
          <ImagenContainer>
            <AveImage src={ave.imagen} alt={ave.nombre} />
          </ImagenContainer>
          <Data tema={tema}>
            <h3>{ave.nombre}</h3>
            <p>({ave.nombre_cientifico})</p>
          </Data>
        </AveCard>
      ))}
      <ScrollToTopButton tema={tema}></ScrollToTopButton>
    </AvesContainer>
  );
};

export default Aves;
