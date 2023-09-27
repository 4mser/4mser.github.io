import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <img
              src="https://chileestuyo.cl/wp-content/uploads/2020/07/Valdivia-urbana.jpg"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <img
              src="https://th.bing.com/th/id/R.7df58af2598271fcd936a65ece5bec91?rik=2Kw5eWJk30yHeg&pid=ImgRaw&r=0"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <img
              src="https://th.bing.com/th/id/R.338a9c651a1c3b1a61119a411a789884?rik=w4yADvwLOa4rqA&pid=ImgRaw&r=0"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <img src="https://wallpapercave.com/wp/wp9021403.jpg" alt="" />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <img
              src="https://th.bing.com/th/id/R.a52eb1b11fd78e4db53f79e38755a51e?rik=3lhewFk87iyKkA&pid=ImgRaw&r=0"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox tema={tema}>
            <img
              src="https://th.bing.com/th/id/R.6a36233fdb4902526b0db4845905a16d?rik=HbfRhyW%2bUuoIxw&pid=ImgRaw&r=0"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>
      </Swiper>
    </AvisosContainer>
  );
};

export default Avisos;
