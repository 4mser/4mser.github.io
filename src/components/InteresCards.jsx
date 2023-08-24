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
              {/* <div className="degree"></div> */}
              <img src={item.imagen} alt={item.nombre} />
              <p>{item.nombre}</p>
            </Categoria>
          </SwiperSlide>
        ))}
      </Swiper>
      {showModal && (
        <ModalBackground tema={tema} show={showModal} onClick={closeModal}>
          <ModalContent tema={tema}>
            <h3>{selectedNews.nombre}</h3>
            <NewsImage src={selectedNews.imagen} alt={selectedNews.imagen} />
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
    border-radius: 5px;
    overflow: hidden;
    user-select: none;
    box-shadow: 0 3px 8px -4px ${(props) => (props.tema === "dark" ? "black" : "var(--shadow)")};
    background: ${(props) =>
      props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
    /* border: 1px solid #dddddd4a; */
    cursor: pointer;
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
  padding: 20px;
  z-index: 1001;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  gap: 15px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 12px;
  }

  img {
    border-radius: 3px;
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
  border-bottom: 1px solid #dddddd4a;
`;
