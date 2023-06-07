"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css"

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Advert = () => {
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
      loop={true}
      className="w-4/5 mt-5"
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div >
            <img src={image.src} alt={image.alt} className="w-full" />
          </div>
        </SwiperSlide>
      ))}
      <div className="button-next  right-2 ">
        <img src="/next.png" alt="Next" />
      </div>
      <div className="button-prev left-2 ">
        <img src="/prv.png" alt="Previous" />
      </div>
    </Swiper>
  );
};

export default Advert;
