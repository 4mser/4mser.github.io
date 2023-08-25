import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import AllExploraData from "../data/AllExploraData"; // Importar el objeto de entradas y categorías
import { Link } from "react-router-dom";

const ExploraAll = ({ tema, activeCategory }) => {
  const categoryData = AllExploraData.snippet[activeCategory] || [];

  return (
    <CategoriasContainer tema={tema}>
      {categoryData.map((explora) => (
        <Link
          key={explora.id}
          className="slider"
          tema={tema}
          to={`/explorar/${explora.url}`}
          style={{ textDecoration: "none" }}
        >
          <ExploraCard tema={tema}>
            <ImagenExplora>
              <img src={explora.imagen} alt="" />
            </ImagenExplora>
            <Data tema={tema}>
              <Titulo>
                <h3>{explora.nombre}</h3>
                <p>{explora.descripcion}</p>
              </Titulo>
              <Categorias tema={tema}>
                {explora.iconos.map((icono, index) => (
                  <Icon key={index} icon={icono} height="25" className="Icon" />
                ))}
              </Categorias>
            </Data>
          </ExploraCard>
        </Link>
      ))}
    </CategoriasContainer>
  );
};

export default ExploraAll;

const CategoriasContainer = styled.div`
  width: 100%;
  padding: 1rem 1.2rem 2rem 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;

  .slider {
    width: calc(50% - 10px);
    height: 17rem;
    flex-grow: 1;
    border-radius: 10px;
    padding: 0;
    border: 1px solid #dddddd4a;
    overflow: hidden;
    margin: 0;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

const ExploraCard = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
  box-shadow: 0px 2px 10px -4px ${(props) => (props.tema === "dark" ? "var(--boxShadow)" : "var(--shadow)")};
  display: flex; /* Aplicamos flex display aquí */

  .Icon {
    color: var(--whiteColor);
  }
`;

const ImagenExplora = styled.div`
  overflow: hidden;
  width: 100%;
  height: 80%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Categorias = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  .Icon {
    border: 1px solid
      ${(props) =>
        props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
    border-radius: 50%;
    padding: 4px;
  }
`;

const Titulo = styled.div``;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

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
