import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import InteresData from "../data/PuntosDeInteresData"; // Asegúrate de tener la ruta correcta
import InteresCards from "./InteresCards";

const PuntosInteres = [
  {
    id: 1,
    nombre: "Playas",
  },
  {
    id: 2,
    nombre: "Parques",
  },
  {
    id: 3,
    nombre: "Reservas",
  },
  {
    id: 4,
    nombre: "Ríos",
  },
  {
    id: 5,
    nombre: "Lagos",
  },
  {
    id: 6,
    nombre: "Islas",
  },
];

const Categoria = styled.div`
  width: 100%;
  height: 2.2rem;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.id === props.activeCategory
      ? "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
      : props.tema === "dark"
      ? "var(--Item)"
      : "var(--cardsLight)"};
  box-shadow: 0 1px 7px -3px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
  text-align: center;

  animation: gradient 8s ease infinite;
  background-size: 200% 200%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  p {
    width: 100%;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 400;
    text-align: center;
    color: ${(props) =>
      props.id === props.activeCategory
        ? "white"
        : props.tema === "dark"
        ? "var(--whiteColor)"
        : "var(--Item)"};
  }
`;

const InteresContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  .mySwiper {
    padding: 1rem 1.2rem 10px 1.2rem;
  }

  h2 {
    font-size: 1rem;
    padding: 0 1.2rem;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const Interes = ({ tema }) => {
  const [activeCategory, setActiveCategory] = useState("Playas");

  return (
    <InteresContainer tema={tema}>
      <h2>Puntos de Interés</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={4.3}
        freeMode={true}
        navigation={true}
        className="mySwiper"
      >
        {PuntosInteres.map((interes) => (
          <SwiperSlide key={interes.id} className="slider">
            <Categoria
              tema={tema}
              id={interes.nombre}
              activeCategory={activeCategory}
              onClick={() => setActiveCategory(interes.nombre)}
            >
              <p>{interes.nombre}</p>
            </Categoria>
          </SwiperSlide>
        ))}
      </Swiper>
      <InteresCards tema={tema} activeCategory={activeCategory} />
    </InteresContainer>
  );
};

export default Interes;
