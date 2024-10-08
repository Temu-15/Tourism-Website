import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./package.css";
import { Pagination } from "swiper/modules";
import { Scrollbar, Navigation } from "swiper/modules";
import Cards from "./Cards";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import adama from "../assets/adama.jpg";
import addisababa from "../assets/addisAbaba.jpg";
import harar from "../assets/harar.jpg";
import lalibela from "../assets/lalibela.jpg";
import gondar from "../assets/gondar.jpg";

function Feature() {
  return (
    <div>
      <h2 className="mt-10 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Popular cities
      </h2>

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        pagination={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 7,
            navigation: {
              enabled: false,
            },
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination, Navigation]}
        classNameName="mySwiper"
      >
        <div className="swiper-button-next top-0">BU</div>
        <div className="swiper-button-prev">HGJ</div>
        <SwiperSlide>
          <Cards
            title="Addis Ababa"
            location="ethiopia"
            travellers={120}
            image={addisababa}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards
            title="Lalibela"
            location="arab"
            travellers={120}
            image={lalibela}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Adama" location="arab" travellers={120} image={adama} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards
            title="Gondar"
            location="arab"
            travellers={120}
            image={gondar}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Lalibela" location="arab" travellers={120} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Lalibela" location="arab" travellers={120} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Lalibela" location="arab" travellers={120} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Lalibela" location="arab" travellers={120} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Lalibela" location="arab" travellers={120} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Feature;
