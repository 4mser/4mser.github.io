import React from "react";
import styled from "styled-components";
import HongosData from "../data/HongosData";
import ScrollToTopButton from "./ScrollToTopButton";

const HongosContainer = styled.div`
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

const HongoCard = styled.div`
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

const ImagenContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
`;

const HongoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Blog = styled.div`
  width: 100%;
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

const Hongos = ({ tema }) => {
  return (
    <HongosContainer tema={tema}>
      <Blog tema={tema}>
        <h2>Hongos en Valdivia</h2>
      </Blog>
      {HongosData.map((hongo) => (
        <HongoCard key={hongo.id} tema={tema}>
          <ImagenContainer>
            <HongoImage src={hongo.imagen} alt={hongo.nombre} />
          </ImagenContainer>
          <Data tema={tema}>
            <h3>{hongo.nombre}</h3>
            <p>({hongo.nombre_cientifico})</p>
          </Data>
        </HongoCard>
      ))}
      <ScrollToTopButton tema={tema}></ScrollToTopButton>
    </HongosContainer>
  );
};

export default Hongos;
