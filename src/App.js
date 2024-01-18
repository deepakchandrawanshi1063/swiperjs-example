import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // direction={"vertical"}
      >
        <SwiperSlide>
          <iframe
            width="800"
            height="350"
            src="https://www.youtube.com/embed/8eWgYd2G-ew?si=MNMruyD-XWfIax-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{
              borderRadius: "50px",
              // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="800"
            height="350"
            src="https://www.youtube.com/embed/8eWgYd2G-ew?si=MNMruyD-XWfIax-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "50px" }}
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="800"
            height="350"
            src="https://www.youtube.com/embed/8eWgYd2G-ew?si=MNMruyD-XWfIax-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "50px" }}
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="800"
            height="350"
            src="https://www.youtube.com/embed/8eWgYd2G-ew?si=MNMruyD-XWfIax-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "50px" }}
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="800"
            height="350"
            src="https://www.youtube.com/embed/8eWgYd2G-ew?si=MNMruyD-XWfIax-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ borderRadius: "50px" }}
            allowfullscreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
