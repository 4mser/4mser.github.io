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

  .mySwiper {
  }

  h3 {
    padding: 0 1.2rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .slider {
    height: 220px;
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
    border-bottom: 1px solid var(--borderDark);
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
    font-size: 12px;
    font-weight: 400;
    filter: drop-shadow(1px 1px 2px black);
  }

  p {
    filter: drop-shadow(1px 1px 1px black);
    font-size: 10px;
    opacity: 0.8;
  }
`;
