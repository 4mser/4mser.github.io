import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import useNasaAPI from "../apis/NasaAPI";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const NasaAPOD = ({ tema }) => {
  const { apodData, loading } = useNasaAPI();

  const renderCard = (item) => (
    <SwiperSlide key={item.date} className="slider">
      <AvisosBox tema={tema}>
        <img src={item.url} alt={item.title} />
        <Info>
          <h2>{item.title}</h2>
          <p>{item.date}</p>
        </Info>
      </AvisosBox>
    </SwiperSlide>
  );

  if (loading) {
    return <StyledActivityIndicator>Cargando...</StyledActivityIndicator>;
  }

  return (
    <AvisosContainer tema={tema}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {apodData.map(renderCard)}
      </Swiper>
      <Nasa tema={tema}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          alt=""
        />
        <p>Imagenes de la semana</p>
      </Nasa>
    </AvisosContainer>
  );
};

export default NasaAPOD;

const StyledActivityIndicator = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;
export const AvisosContainer = styled.div`
  width: 100%;
  padding-top: 7.6rem;

  h3 {
    padding: 0 1.2rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .slider {
    height: 300px;
    display: flex;
    padding-bottom: 20px;
  }

  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    transform: translate(-1.2rem, 8px);
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  .swiper-pagination-bullet-active {
    animation: pagination forwards 0.3s ease;

    @keyframes pagination {
      from {
      }
      to {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
`;

export const AvisosBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 0;
  text-align: end;
  padding: 1rem 1.4rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    filter: drop-shadow(1px 1px 2px black);
  }

  p {
    filter: drop-shadow(1px 1px 1px black);
    font-size: 12px;
    opacity: 0.8;
  }
`;

const Nasa = styled.div`
  height: 3rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  position: absolute;
  z-index: 2;
  img {
    height: 100%;
    object-fit: contain;
  }

  p {
    width: 100%;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;
