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
    <div className="px-20 bg-gray-50 py-12">
      <h2 className="text-4xl font-semibold text-center font-[antonio] mb-8">
        Featured Products
      </h2>
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
          <div ref={nextButtonRef} className="swiper-button-next bg-primary bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-12 !w-12 p-4">
            <TfiArrowRight strokeWidth={1} color="white" />
          </div>
          <div ref={prevButtonRef} className="swiper-button-prev bg-primary  bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-12 !w-12 p-4">
            <TfiArrowRight
              strokeWidth={1}
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
