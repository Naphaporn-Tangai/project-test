"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const CustomImageSlider = () => {
  const images = [
    {
      src: "http://www.embassycineplex.com/uploads/banner/jnJgdxjfkj202009302025.jpg",
      alt: "Image 1",
    },
    {
      src: "http://www.embassycineplex.com/uploads/banner/Ab7OYVwTWx202303261630.jpg",
      alt: "Image 2",
    },
    {
      src: "http://www.embassycineplex.com/uploads/banner/KL9rs5LibF202304171230.jpg",
      alt: "Image 3",
    },
    {
      src: "http://www.embassycineplex.com/uploads/banner/v0zUsDv6nI202303311211.jpg",
      alt: "Image 4",
    },
    {
      src: "http://www.embassycineplex.com/uploads/banner/l0l4iCrCNN202301031337.jpg",
      alt: "Image 5",
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={false}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      className="w-5/6 mt-5"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div>
            <img src={image.src} alt={image.alt} className="w-full" />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next ">
        <img src="/next.png" alt="Next" />
      </div>
      <div className="swiper-button-prev ">
        <img src="/prv.png" alt="Previous" />
      </div>
    </Swiper>
  );
};

export default CustomImageSlider;
