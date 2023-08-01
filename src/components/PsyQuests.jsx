import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { QuestsBox, QuestsContainer } from "../styles/PsyQuestsStyle";

const Avisos = ({ tema }) => {
  return (
    <QuestsContainer tema={tema}>
      <h2>PsyQuests del día</h2>
      <Swiper
        // spaceBetween={30}
        effect={"coverflow"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide className="slider">
          <QuestsBox tema={tema}>
            <h3>Buena</h3>
            <img
              src="https://image.lexica.art/full_jpg/022b792c-a7a2-4293-8c19-fe55ada2bb44"
              alt=""
            />
          </QuestsBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <QuestsBox tema={tema}>
            <h3>Compare</h3>
            <img
              src="https://image.lexica.art/full_jpg/edce22fd-492d-4b85-99a1-016ef42fe431"
              alt=""
            />
          </QuestsBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <QuestsBox tema={tema}>
            <h3>Como tamo</h3>
            <img
              src="https://image.lexica.art/full_jpg/380f26dc-c0f3-4d8a-8e8d-adf28e2867ca"
              alt=""
            />
          </QuestsBox>
        </SwiperSlide>
      </Swiper>
    </QuestsContainer>
  );
};

export default Avisos;
