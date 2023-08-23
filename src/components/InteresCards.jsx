import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { FreeMode } from "swiper/modules";
import InteresData from "../data/PuntosDeInteresData";

const InteresCards = ({ tema, activeCategory }) => {
  const categoryData = InteresData[activeCategory] || [];

  return (
    <CategoriasContainer tema={tema}>
      <Swiper
        tema={tema}
        centeredSlides={false}
        spaceBetween={15}
        slidesPerView={2.1}
        freeMode={true}
        navigation={true}
        className="mySwiper"
      >
        {categoryData.map((item) => (
          <SwiperSlide key={item.id} className="slider" tema={tema}>
            <Categoria tema={tema}>
              {/* <div className="degree"></div> */}
              <img src={item.imagen} alt={item.nombre} />
              <p>{item.nombre}</p>
            </Categoria>
          </SwiperSlide>
        ))}
      </Swiper>
    </CategoriasContainer>
  );
};

export default InteresCards;

const CategoriasContainer = styled.div`
  width: 100%;
  user-select: none;
  .mySwiper {
    padding: 1rem 1.2rem;
    user-select: none;
  }

  .slider {
    border-radius: 5px;
    overflow: hidden;
    user-select: none;
    box-shadow: 0 3px 7px -3px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
    background: ${(props) =>
      props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
    /* border: 1px solid #dddddd4a; */
    cursor: pointer;
    background: ${(props) =>
      props.tema === "dark" ? "" : "var(--cardsLight)"};
  }

  h2 {
    font-size: 1rem;
    padding: 0 1.2rem;
    font-weight: 500;

    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
    margin-bottom: 20px;
  }
`;

const Categoria = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 10px;
    font-weight: 400;
    padding: 10px;
    bottom: 5px;
    z-index: 2;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--Item)"};
  }

  img {
    width: 100%;
    height: 12rem;
    transition: 0.3s ease-in-out;
    /* border-bottom: 1px solid #dddddd4a; */
    object-fit: cover;
  }

  .degree {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 46%
    );
    border-radius: 5px;
    position: absolute;
    z-index: 1;
  }
`;
