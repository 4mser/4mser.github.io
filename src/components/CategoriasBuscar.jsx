import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FreeMode } from "swiper/modules";
import CategoriasData from "../data/CategoriasData";
import AllExploraData from "../data/AllExploraData";
import ExploraAll from "./ExploraAll";
import SinContenido from "./SinContenido";

const CategoriasBuscar = ({ tema }) => {
  const [activeCategory, setActiveCategory] = useState("todo");

  const filteredEntries = useMemo(() => {
    return AllExploraData.snippet[activeCategory.toLowerCase()] || [];
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <CategoriasContainer tema={tema}>
      {filteredEntries.length === 0 ? (
        <SinContenido tema={tema} />
      ) : (
        <ExploraAll
          entradas={filteredEntries}
          tema={tema}
          activeCategory={activeCategory}
        />
      )}
      <SubNav tema={tema}>
        <Swiper
          centeredSlides={false}
          spaceBetween={10}
          slidesPerView={5}
          navigation={false}
          className="mySwiper"
        >
          {CategoriasData.map((categoria) => (
            <SwiperSlide key={categoria.id} tema={tema}>
              <Categoria
                tema={tema}
                id={categoria.snippet}
                activeCategory={activeCategory}
                onClick={() => handleCategoryClick(categoria.snippet)}
              >
                <Icon
                  icon={categoria.icono}
                  height={categoria.height}
                  className="Icon"
                />
                {/* <p>{categoria.nombre}</p> */}
              </Categoria>
            </SwiperSlide>
          ))}
        </Swiper>
      </SubNav>
    </CategoriasContainer>
  );
};

const CategoriasContainer = styled.div`
  width: 100%;
  padding-top: 10rem;

  .mySwiper {
    padding: 0.2rem 1.2rem 3px 1.2rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const SubNav = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  /* border-top: 1px solid var(--borderDark); */
  height: 4.5rem;
  box-shadow: 0 -1px 10px -7px var(--boxShadow);
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
`;

const Categoria = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 1px 7px -3px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.id === props.activeCategory
      ? "var(--degree)"
      : props.tema === "dark"
      ? "var(--Item)"
      : "var(--cardsLight)"};
  flex-direction: row;
  padding: 5px 10px;
  gap: 5px;
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
    font-size: 0.5rem;
    font-weight: 400;
    flex-wrap: nowrap;
    color: ${(props) =>
      props.id === props.activeCategory
        ? "white"
        : props.tema === "dark"
        ? "var(--whiteColor)"
        : "var(--Item)"};
  }

  .Icon {
    color: ${(props) =>
      props.id === props.activeCategory
        ? "white"
        : props.tema === "dark"
        ? "var(--whiteColor)"
        : "var(--Item)"};
  }
`;

export default CategoriasBuscar;
