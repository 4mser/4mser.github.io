import React from "react";
import styled from "styled-components";
import HongosData from "../data/HongosData";
import ScrollToTopButton from "./ScrollToTopButton";

const HongosContainer = styled.div`
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

const HongoCard = styled.div`
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

const HongoImage = styled.img`
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

const Hongos = ({ tema }) => {
  return (
    <HongosContainer tema={tema}>
      <Blog tema={tema}>
        <h2>Hongos en Valdivia</h2>
      </Blog>
      {HongosData.map((hongo) => (
        <HongoCard key={hongo.id} tema={tema}>
          <HongoImage src={hongo.imagen} alt={hongo.nombre} />
          <h3>{hongo.nombre}</h3>
          <p>({hongo.nombre_cientifico})</p>
        </HongoCard>
      ))}
      <ScrollToTopButton tema={tema}></ScrollToTopButton>
    </HongosContainer>
  );
};

export default Hongos;
