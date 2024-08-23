"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const bannersData = [
    {
        "id": 1,
        "img": "https://img.freepik.com/free-photo/precision-grinding-within-cylindrical-shape_60438-4077.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
        "title": "Precision Grinding Excellence",
        "description": "Discover cutting-edge precision grinding solutions at Ruby Engineering. Our advanced technology ensures flawless results for your cylindrical components."
    },
    {
        "id": 2,
        "img": "https://img.freepik.com/premium-photo/jaggery-production-process-modern-facility_1234738-380332.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
        "title": "Modern Jaggery Production",
        "description": "Experience state-of-the-art jaggery production with Ruby Engineering's modern facilities. We deliver high-quality, pure jaggery with unmatched efficiency."
    },
    {
        "id": 3,
        "img": "https://img.freepik.com/premium-photo/coffee-roaster-machine-coffee-roasting-process_183314-7588.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
        "title": "Expert Coffee Roasting Machinery",
        "description": "Ruby Engineering offers top-of-the-line coffee roasting machines. Enhance your coffee roasting process with our reliable and innovative equipment."
    }
];


const Homebanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="banner-container h-[35vh] md:h-[80vh]">
       <Swiper
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      pagination={{ dynamicBullets: true }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      navigation
      grabCursor
      className="mySwiper"
    >
      {bannersData.map((banner, index) => (
        <SwiperSlide key={index}>
        <div className="relative w-full h-full">
          <div
            className={`slide-image ${currentSlide === index ? 'fade-in' : 'fade-out'}`}
          >
            <img src={banner.img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
      
          <div className={`absolute inset-0 flex items-center justify-center p-5 text-white ${currentSlide === index ? 'slide-up' : 'slide-down'}`}>
            <div className="text-center">
              <h2 className="text-[72px] text-white font-bold font-[antonio]">{banner.title}</h2>
              <p className="mt-2 text-white text-[28px] mx-20 my-4">{banner.description}</p>
              <div className="bg-primary w-44 mt-6 mx-auto px-5 py-2">
                <p className="text-2xl text-white font-medium">Contact us</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
    </div>
  );
};

export default Homebanner;
