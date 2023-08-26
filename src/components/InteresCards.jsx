import React, { useState } from "react";
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

  /* Modals */

  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setShowModal(false);
  };

  /* End Modals */

  return (
    <CategoriasContainer tema={tema}>
      <Swiper
        tema={tema}
        centeredSlides={false}
        spaceBetween={15}
        slidesPerView={2.1}
        freeMode={true}
        navigation={false}
        className="mySwiper"
      >
        {categoryData.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => openModal(item)}
            className="slider"
            tema={tema}
          >
            <Categoria tema={tema}>
              <ImagenContainer>
                <img src={item.imagen} alt={item.nombre} />
              </ImagenContainer>
              <Data tema={tema}>
                <h3>{item.nombre}</h3>
              </Data>
            </Categoria>
          </SwiperSlide>
        ))}
      </Swiper>
      {showModal && (
        <ModalBackground tema={tema} show={showModal} onClick={closeModal}>
          <ModalContent tema={tema}>
            <NewsImage src={selectedNews.imagen} alt={selectedNews.imagen} />
            <h3>{selectedNews.nombre}</h3>
            <p>{selectedNews.descripcion}</p>
          </ModalContent>
        </ModalBackground>
      )}
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
    border-radius: 10px;
    height: 14rem;
    overflow: hidden;
    user-select: none;
    box-shadow: 0 3px 8px -4px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
    background: ${(props) =>
      props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
    /* border: 1px solid #dddddd4a; */
  }
`;

const Categoria = styled.div`
  width: 100%;
  height: 14rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
`;

const ImagenContainer = styled.div`
  width: 100%;
  height: 85%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Data = styled.div`
  display: flex;
  height: 15%;
  flex-direction: column;
  padding: 0 10px;
  justify-content: center;

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
    font-size: 10px;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
  }
`;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.764);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ModalContent = styled.div`
  background: linear-gradient(
    -45deg,
    #0b0b0b 20%,
    #273647 60%,
    #151d27 80%,
    #0b0b0b 100%
  );
  animation: gradient 10s ease infinite;
  background-size: 700% 100%;

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
  position: fixed;
  top: 50%;
  width: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--borderDark);
  padding: 15px;
  z-index: 1001;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 14px;
    margin-bottom: 3px;
    font-weight: 600;
    color: white;
  }

  p {
    text-align: justify;
    font-size: 12px;
  }

  img {
    border-radius: 3px;
    margin-bottom: 8px;
  }

  span {
    font-size: 10px;
    opacity: 0.6;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
