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
import addisababa from "../assets/adisababa.jpg";
import harar from "../assets/harari.jpg";
import lalibela from "../assets/lalibela.jpg";
import gondar from "../assets/gondare.jpg";
import debren from "../assets/debren.jpg";
import sanete from "../assets/sanete.jpg";
import due from "../assets/due.jpg";

function Feature() {
  return (
    <div>
      <h2 className="mt-10 text-4xl font-extrabold leading-none text-center tracking-tight text-[#05073C] md:text-5xl lg:text-6xl dark:text-[#05073C]">
        Popular cities
      </h2>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 7,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
        classNameName="mySwiper"
      >
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
          <Cards title="Harar" location="arab" travellers={120} image={harar} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards
            title="Adama"
            location="arab"
            travellers={120}
            image={debren}
          />
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
          <Cards
            title="Sanete"
            location="arab"
            travellers={120}
            image={sanete}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cards title="Due" location="arab" travellers={120} image={due} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Feature;
