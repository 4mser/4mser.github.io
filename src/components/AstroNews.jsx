import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const News = ({ tema }) => {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=0xCaQOqPvwGlOfIDZggRuRxU3xFMGQnQoJKTeHjS&count=5"
        );
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching News data:", error);
      }
    };

    fetchNewsData();
  }, []);

  const openModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setShowModal(false);
  };

  return (
    <NewsContainer tema={tema}>
      <h2>News</h2>
      <Swiper
        tema={tema}
        centeredSlides={false}
        spaceBetween={15}
        slidesPerView={1.8}
        freeMode={true}
        navigation={false}
        className="mySwiper"
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id} className="slider" tema={tema}>
            <NewsCard tema={tema}>
              <NewsImage src={news.url} alt={news.title} />
              <h3>{news.title}</h3>
              <p>
                {news.explanation.slice(0, 100)}{" "}
                {news.explanation.length > 100 && (
                  <ReadMoreButton tema={tema} onClick={() => openModal(news)}>
                    ... <span>Ver más</span>
                  </ReadMoreButton>
                )}
              </p>
            </NewsCard>
          </SwiperSlide>
        ))}
      </Swiper>
      {showModal && (
        <ModalBackground tema={tema} show={showModal} onClick={closeModal}>
          <ModalContent tema={tema}>
            <h2>{selectedNews.title}</h2>
            <NewsImage src={selectedNews.url} alt={selectedNews.title} />
            <DownloadButton
              href={selectedNews.url}
              target="_blank"
              download={`${selectedNews.title}.jpg`}
            >
              Descargar imagen
            </DownloadButton>
            <p>{selectedNews.explanation}</p>
          </ModalContent>
        </ModalBackground>
      )}
    </NewsContainer>
  );
};

export default News;

const NewsContainer = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 1.2rem;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }

  .mySwiper {
    padding: 0 1.2rem;
    padding-bottom: 1rem;
  }
`;

const NewsCard = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  border: 1px solid #dddddd4a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  padding-bottom: 5px;

  h3 {
    font-size: 12px;
    font-weight: 500;
    padding: 5px 10px;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
    white-space: nowrap; // Evita que el texto se rompa en varias líneas
    overflow: hidden; // Oculta el exceso de texto
    text-overflow: ellipsis;
  }

  p {
    padding: 0 10px;
    padding-bottom: 10px;
    font-size: 10px;
    font-weight: 400;
    font-style: italic;
    color: ${(props) =>
      props.tema === "dark" ? "var(--shadow)" : "var(--Item)"};
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-bottom: 1px solid #dddddd4a;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: ${(props) =>
    props.tema === "dark" ? "var(--shadow)" : "var(--Item)"};
  span {
    color: var(--Blue);
    font-weight: 700;
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
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  gap: 15px;

  h2 {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 12px;
  }
`;

const DownloadButton = styled.a`
  background-color: var(--Blue);
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--BlueHover);
  }
`;
