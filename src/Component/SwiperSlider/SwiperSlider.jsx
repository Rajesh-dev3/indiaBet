import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './swiper.scss';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { casinogame } from '../../assets/Index';

export default function App() {
  return (
    <>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true} 
        autoplay={{
          delay: 2500, // Time between slide transitions (in ms)
          disableOnInteraction: false, // Keep autoplay enabled even after interaction
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        <SwiperSlide><img src={casinogame}/></SwiperSlide>
        <SwiperSlide><img src={casinogame}/></SwiperSlide>
        <SwiperSlide><img src={casinogame}/></SwiperSlide>
        <SwiperSlide><img src={casinogame}/></SwiperSlide>
        <SwiperSlide><img src={casinogame}/></SwiperSlide>
        <SwiperSlide><img src={casinogame}/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
