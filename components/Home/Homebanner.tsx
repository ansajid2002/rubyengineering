"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, ChevronRight } from 'lucide-react';

const bannersData = [
  {
      "id": 1,
      "img": "/banner/8.webp",
      "title": "Advanced Food Processing Plants",
      "description": "Optimize your production with Ruby Engineering’s state-of-the-art food processing machinery. Our plants are designed for efficiency and high-quality output."
  },
  {
      "id": 2,
      "img": "https://img.freepik.com/premium-photo/jaggery-production-process-modern-facility_1234738-380332.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
      "title": "Precision Powder Grinding Machinery",
      "description": "Achieve fine and consistent powder with Ruby Engineering’s cutting-edge powder grinding machinery. Perfect for spices, grains, and more."
  },
  {
      "id": 3,
      "img": "https://img.freepik.com/premium-photo/coffee-roaster-machine-coffee-roasting-process_183314-7588.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
      "title": "Reliable Hydraulic Systems",
      "description": "Experience the power of Ruby Engineering’s hydraulic systems. Our technology provides robust performance for industrial and manufacturing applications."
  }
];


const Homebanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  return (
    <div className="banner-container h-[40vh] sm:h-[50vh] md:h-[80vh]">
       <Swiper
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      pagination={{ dynamicBullets: true }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      
      grabCursor
      className="mySwiper"
      navigation={{
        nextEl: nextButtonRef.current,
        prevEl: prevButtonRef.current,
      }}
   
   
      onBeforeInit={(swiper) => {
        swiper.params.navigation.nextEl = nextButtonRef.current;
        swiper.params.navigation.prevEl = prevButtonRef.current;
      }}
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
          <div className="absolute inset-0 bg-black opacity-60"></div>
      
          <div className={`absolute inset-0 flex items-center justify-center p-5 text-white ${currentSlide === index ? 'slide-up' : 'slide-down'}`}>
            <div className="text-center">
              <h2 className= " text-[22px] sm:text-[40px] md:text-[65px] text-white font-bold font-[antonio]">{banner.title}</h2>
              <p className="mt-2 text-white text-[15px] sm:text-xl md:text-2xl mx-0 sm:mx-16 md:mx-32 my-4">{banner.description}</p>
              <div className="bg-gradient-to-r from-primary to-secondary hover:to-primary duration-200 w-32 md:w-40 mt-3 md:mt-6 mx-auto px-3 md:px-5 py-1 md:py-2">
                <p className=" text-lg md:text-xl text-white group font-medium flex items-center">Contact us <span className='-mb-0.5 ml-1 group-hover:ml-1.5 duration-150'><ChevronRight size={20} color="#fff" /></span></p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      ))}
      <div ref={nextButtonRef} className="swiper-button-next  bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-24 !w-24 p-1">
            <ChevronRight strokeWidth={1} color="#fff" />
          </div>
          <div ref={prevButtonRef} className="swiper-button-prev  bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-24 !w-24 p-1">
            <ChevronRight
            
              strokeWidth={1}
              color="white"
              className="rotate-180"
            />
          </div>
    </Swiper>
    </div>
  );
};

export default Homebanner;
