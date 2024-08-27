"use client";
import { ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { TfiArrowRight } from 'react-icons/tfi';
import Productcard from '../Productcard';

const Ourproducts = ({ featuredproducts }) => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <div className=" px-4 md:px-20 bg-gray-50 py-12">
     
      
        <p className="text-base text-primary font-bold text-center">Popular</p>
            <h2 className=" text-3xl md:text-5xl font-[antonio] text-center mb-8"> Featured Products</h2>
            <div className="w-48 mx-auto -mt-4  mb-8 h-0.5 bg-primary rounded-full"></div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
       
          modules={[ Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.params.navigation.prevEl = prevButtonRef.current;
          }}
          breakpoints={{
            0: { // settings for all screens
              slidesPerView: 1,
            },
            500: { // settings for screens wider than 600px
              slidesPerView: 2,
            },
            800: { // settings for screens wider than 600px
              slidesPerView: 3,
            },
            1150: { // settings for screens wider than 960px
              slidesPerView: 4,
            },
            1400: { // settings for screens wider than 960px
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {featuredproducts?.map((product) => (
        <SwiperSlide
        key={product.term_id}
        className="flex flex-col items-center bg-white border rounded-lg shadow-lg relative group overflow-hidden"
      >
      <Productcard product ={product} isfeatured={true} />
      </SwiperSlide>
      
         
          ))}
          <div ref={nextButtonRef} className="swiper-button-next bg-primary bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-12 !w-12 !-mt-20 p-4">
            <ArrowRight strokeWidth={3} color="white" />
          </div>
          <div ref={prevButtonRef} className="swiper-button-prev bg-primary  bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-12 !w-12 p-4 !-mt-20">
            <ArrowRight
            
              strokeWidth={3}
              color="white"
              className="rotate-180"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Ourproducts;
