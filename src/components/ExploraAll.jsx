import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import ExploraData from "../data/ExploraData";
import { Link } from "react-router-dom";

const ExploraAll = ({ tema }) => {
  return (
    <CategoriasContainer tema={tema}>
      <Swiper tema={tema} className="mySwiper">
        {ExploraData.slice(0).map((explora) => (
          <Container key={explora.id} className="slider" tema={tema}>
            <Link
              to={`/explorar/${explora.url}`}
              style={{ textDecoration: "none" }}
            >
              <ExploraCard tema={tema}>
                <ImagenExplora>
                  <img src={explora.imagen} alt="" />
                </ImagenExplora>
                <Data>
                  <Titulo>
                    <h3>{explora.nombre}</h3>
                    <p>{explora.descripcion}</p>
                  </Titulo>
                  <Categorias tema={tema}>
                    {explora.iconos.map((icono, index) => (
                      <Icon
                        key={index}
                        icon={icono}
                        height="25"
                        className="Icon"
                      />
                    ))}
                  </Categorias>
                </Data>
              </ExploraCard>
            </Link>
          </Container>
        ))}
      </Swiper>
    </CategoriasContainer>
  );
};

export default ExploraAll;
const Container = styled.div``;

const CategoriasContainer = styled.div`
  width: 100%;

  .mySwiper {
    padding: 0 1.2rem 1rem 1.2rem;
  }

  .swiper-pagination-bullet {
    background-color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--Blue)"};
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) =>
      props.tema === "dark" ? "white" : "var(--Blue)"};
  }
`;

const ExploraCard = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  user-select: none;
  flex-direction: row;
  overflow: hidden;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
  box-shadow: 0px 2px 10px -4px ${(props) => (props.tema === "dark" ? "var(--boxShadow)" : "var(--shadow)")};

  p {
    width: 100%;
    font-size: 10px;
    font-weight: 400;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
    opacity: 0.7;
  }

  h3 {
    font-size: 12px;
    font-weight: 600;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
  }

  .Icon {
    color: var(--whiteColor);
  }
`;

const ImagenExplora = styled.div`
  width: 40%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Titulo = styled.div``;

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

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
`;
