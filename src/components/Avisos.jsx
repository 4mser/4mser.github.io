import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { AvisosContainer, AvisosBox } from "../styles/AvisosStyle";

const Avisos = ({ tema }) => {
  return (
    <AvisosContainer tema={tema}>
      <Swiper
        spaceBetween={30}
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
        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <h3>
              Explora los misterios del mundo real, resuelve desafiantes
              acertijos y conviertete en un PsyQuester.
            </h3>
            <img
              src="https://i.pinimg.com/564x/1b/5c/24/1b5c243eb2e560ddf0592dcb211804ec.jpg"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <h3>
              Únete o crea tu facción, compite con otros PsyQuesters y demuestra
              tu astucia en desafíos enigmáticos. ¿Tienes lo que se necesita?
            </h3>
            <img
              src="https://i.pinimg.com/564x/aa/42/94/aa4294cb24633f7cba4367b7d39f6cbd.jpg"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <h3>
              Completa desafíos y desbloquea logros épicos para obtener
              recompensas asombrosas y desvelar secretos inimaginables.
            </h3>
            <img
              src="https://i.pinimg.com/564x/e9/d5/07/e9d507ed1ad1490d7a90d990b39e4b25.jpg"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>
      </Swiper>
    </AvisosContainer>
  );
};

export default Avisos;
