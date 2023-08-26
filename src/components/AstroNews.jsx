import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";

const News = ({ tema }) => {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=0xCaQOqPvwGlOfIDZggRuRxU3xFMGQnQoJKTeHjS&count=7"
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
      {/* <h1>Random Info</h1> */}
      <Swiper
        tema={tema}
        centeredSlides={false}
        spaceBetween={15}
        slidesPerView={2}
        freeMode={true}
        navigation={false}
        className="mySwiper"
      >
        {Array.isArray(newsData) &&
          newsData.map(
            (news) =>
              // Verifica si el tipo de media es "image"
              news.media_type === "image" && (
                <SwiperSlide
                  onClick={() => openModal(news)}
                  key={news.id}
                  className="slider"
                  tema={tema}
                >
                  <NewsCard tema={tema}>
                    <NewsImage src={news.url} alt={news.title} />
                    <h3>{news.title}</h3>
                    <p>
                      {news.explanation.slice(0, 50)}{" "}
                      {news.explanation.length > 50 && (
                        <ReadMoreButton tema={tema}>
                          ... <span>Ver más</span>
                        </ReadMoreButton>
                      )}
                    </p>
                  </NewsCard>
                </SwiperSlide>
              )
          )}
      </Swiper>
      {showModal && (
        <ModalBackground tema={tema} show={showModal} onClick={closeModal}>
          <ModalContent tema={tema}>
            <FotoModal>
              <NewsImage2 src={selectedNews.url} alt={selectedNews.title} />
              <DownloadButton
                href={selectedNews.url}
                target="_blank"
                download={`${selectedNews.title}.jpg`}
              >
                <Icon icon="basil:login-outline" height="25" rotate={1} />
              </DownloadButton>
            </FotoModal>
            <h2>{selectedNews.title}</h2>
            <Data tema={tema}>
              <p>{selectedNews.explanation}</p>
            </Data>
            <span>{selectedNews.date}</span>
          </ModalContent>
        </ModalBackground>
      )}
    </NewsContainer>
  );
};

export default News;

// Resto del código de estilos y componentes aquí...

const NewsContainer = styled.div`
  h1 {
    font-size: 15px;
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
  /* border: 1px solid #dddddd4a; */
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 5px;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--cardsLight)"};
  box-shadow: 0px 2px 10px -4px ${(props) => (props.tema === "dark" ? "var(--boxShadow)" : "var(--shadow)")};

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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; // Limita a 3 líneas
    overflow: hidden;
  }
`;

const FotoModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 3px;
  justify-content: flex-end;
  overflow: hidden;
  align-items: self-start;
  margin-bottom: 10px;
`;

const DownloadButton = styled.a`
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  position: absolute;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 8rem;
  object-fit: cover;
`;

const NewsImage2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
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
  max-height: 80%;
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

  h2 {
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    text-align: justify;
    margin-right: 4px;
  }

  span {
    font-size: 10px;
    opacity: 0.6;
  }
`;

const Data = styled.div`
  margin-bottom: 5px;
  width: 100%;
  max-height: 60vh; /* Establece la altura máxima que deseas */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical si es necesario */
`;
