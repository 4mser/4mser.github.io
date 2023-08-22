import React, { useEffect, useState } from "react";
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

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const Aves = ({ tema }) => {
  const pageSize = 10; // Cantidad de elementos a cargar por página
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [avesToShow, setAvesToShow] = useState([]);

  const loadMoreAves = () => {
    if (loading) return;
    setLoading(true);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    setTimeout(() => {
      setAvesToShow([...avesToShow, ...AvesData.slice(startIndex, endIndex)]);
      setCurrentPage(currentPage + 1);
      setLoading(false);
    }, 1000); // Simula una demora en la carga
  };

  useEffect(() => {
    loadMoreAves();
  }, []); // Carga inicial

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [avesToShow]);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const contentHeight = document.documentElement.scrollHeight;

    if (!loading && scrolled + viewportHeight + 100 >= contentHeight) {
      loadMoreAves();
    }
  };

  return (
    <div>
      <AvesContainer tema={tema}>
        <h2>Aves que encontrarás en Valdivia</h2>
        {avesToShow.map((ave) => (
          <AveCard key={ave.id} tema={tema}>
            <AveImage src={ave.imagen} alt={ave.nombre} />
            <h3>{ave.nombre}</h3>
            <p>({ave.nombre_cientifico})</p>
          </AveCard>
        ))}
        {loading && (
          <LoadingIndicator>
            <span>Cargando...</span>
          </LoadingIndicator>
        )}
      </AvesContainer>
    </div>
  );
};

export default Aves;
