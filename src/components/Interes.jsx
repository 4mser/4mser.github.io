import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import InteresCards from "./InteresCards";
import { FreeMode } from "swiper/modules";

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
  user-select: none;
  background: ${(props) =>
    props.id === props.activecategory
      ? "var(--degree)"
      : props.tema === "dark"
      ? "var(--Item)"
      : "var(--cardsLight)"};
  box-shadow: 0 1px 7px -3px ${(props) => (props.tema === "dark" ? "var(--boxShadow)" : "var(--shadow)")};
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
      props.id === props.activecategory
        ? "white"
        : props.tema === "dark"
        ? "var(--whiteColor)"
        : "var(--Item)"};
  }
`;

const InteresContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  user-select: none;
  .mySwiper {
    padding: 1rem 1.2rem 10px 1.2rem;
    user-select: none;
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
        navigation={false}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {PuntosInteres.map((interes) => (
          <SwiperSlide key={interes.id} className="slider">
            <Categoria
              tema={tema}
              id={interes.nombre}
              activecategory={activeCategory}
              onClick={() => setActiveCategory(interes.nombre)}
            >
              <p>{interes.nombre}</p>
            </Categoria>
          </SwiperSlide>
        ))}
      </Swiper>
      <InteresCards tema={tema} activecategory={activeCategory} />
    </InteresContainer>
  );
};

export default Interes;
