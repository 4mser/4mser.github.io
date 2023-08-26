import React, { useState } from "react";
import styled from "styled-components";
import HongosData from "../data/HongosData";
import ScrollToTopButton from "./ScrollToTopButton";

const HongosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1.2rem 2rem 1.2rem;

  padding-top: 10rem;
  gap: 20px;

  h2 {
    font-size: 1.2rem;
    width: 100%;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const HongoCard = styled.div`
  width: calc(50% - 10px);
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
  height: 80%;
  overflow: hidden;
`;

const HongoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Blog = styled.div`
  width: 100%;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;

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

const Hongos = ({ tema }) => {
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
  return (
    <HongosContainer tema={tema}>
      <Blog tema={tema}>
        <h2>Hongos en Valdivia</h2>
      </Blog>
      {HongosData.map((hongo) => (
        <HongoCard key={hongo.id} tema={tema} onClick={() => openModal(hongo)}>
          <ImagenContainer>
            <HongoImage src={hongo.imagen} alt={hongo.nombre} />
          </ImagenContainer>
          <Data tema={tema}>
            <h3>{hongo.nombre}</h3>
            <p>({hongo.nombre_cientifico})</p>
          </Data>
        </HongoCard>
      ))}
      <ScrollToTopButton tema={tema}></ScrollToTopButton>
      {showModal && (
        <ModalBackground tema={tema} show={showModal} onClick={closeModal}>
          <ModalContent tema={tema}>
            <NewsImage src={selectedNews.imagen} alt={selectedNews.imagen} />
            <h3>{selectedNews.nombre}</h3>
            <p>{selectedNews.nombre_cientifico}</p>
          </ModalContent>
        </ModalBackground>
      )}
    </HongosContainer>
  );
};

export default Hongos;

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
    font-weight: 600;
    color: white;
  }

  p {
    text-align: justify;
    font-size: 12px;
  }

  img {
    margin-bottom: 8px;
    border-radius: 5px;
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
