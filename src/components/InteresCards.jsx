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
        slidesPerView={2.3}
        freeMode={true}
        navigation={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {categoryData.map((item) => (
          <SwiperSlide key={item.id} className="slider" tema={tema}>
            <Categoria tema={tema}>
              <p>{item.nombre}</p>
              <div className="degree"></div>
              <img src={item.imagen} alt={item.nombre} />
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
  margin-bottom: 5rem;

  .mySwiper {
    padding: 1rem 1.2rem;
  }

  .slider {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 7px -3px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
    cursor: pointer;
  }

  .slider:hover {
    img {
      transform: scale(1.2);
    }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 7px -3px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};

  p {
    width: 100%;
    font-size: 0.7rem;
    font-weight: 400;
    position: absolute;
    padding: 0 10px;
    bottom: 5px;
    z-index: 2;
    color: var(--whiteColor);
  }

  img {
    width: 100%;
    height: 12rem;
    transition: 0.3s ease-in-out;
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
