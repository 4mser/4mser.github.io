import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { FreeMode } from "swiper/modules";
import CategoriasData from "../data/CategoriasData";

const Categorias = ({ tema }) => {
  // Omitir el primer elemento del array
  const categoriasSinPrimerElemento = CategoriasData.slice(1);

  return (
    <CategoriasContainer tema={tema}>
      <h2>Categorías</h2>
      <Swiper
        tema={tema}
        centeredSlides={false}
        spaceBetween={10}
        slidesPerView={4.2}
        freeMode={true}
        navigation={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {categoriasSinPrimerElemento.map((categoria) => (
          <SwiperSlide key={categoria.id} className="slider" tema={tema}>
            <Categoria tema={tema}>
              <Icon icon={categoria.icono} height="30" className="Icon" />
              <p>{categoria.nombre}</p>
            </Categoria>
          </SwiperSlide>
        ))}
      </Swiper>
    </CategoriasContainer>
  );
};

export default Categorias;

const CategoriasContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  .mySwiper {
    padding: 1rem 1.2rem;
  }

  h2 {
    font-size: 1rem;
    padding: 0 1.2rem;
    font-weight: 500;

    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const Categoria = styled.div`
  width: 100%;
  height: 75px;
  border-radius: 12px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
  box-shadow: 0 1px 7px -3px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
  flex-direction: column;
  padding: 5px;
  cursor: pointer;

  p {
    width: 100%;
    font-size: 0.5rem;
    font-weight: 400;
    text-align: center;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
  }

  .Icon {
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
  }
`;
