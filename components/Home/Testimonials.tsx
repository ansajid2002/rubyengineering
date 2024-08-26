"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-cards';
const testimonials = [
    {
      id: 1,
      image: '/images/testimonial1.jpg', // Replace with actual image path
      name: 'Emily Johnson',
      text: 'H-Konnect provided an unforgettable stay! From the warm welcome at check-in to the luxurious room amenities, every detail was meticulously attended to.',
    },
    {
      id: 2,
      image: '/images/testimonial2.jpg', // Replace with actual image path
      name: 'Michael Smith',
      text: 'An exceptional experience at H-Konnect. The modern and elegantly designed rooms were a perfect retreat after a day of exploring the city.',
    },
    {
      id: 3,
      image: '/images/testimonial3.jpg', // Replace with actual image path
      name: 'Sophia Martinez',
      text: 'Our stay at H-Konnect was nothing short of amazing. The luxurious spa and wellness facilities added an extra layer of relaxation to our trip. ',
    },
    {
      id: 4,
      image: '/images/testimonial4.jpg', // Replace with actual image path
      name: 'David Lee',
      text: 'H-Konnect exceeded all our expectations. The hotel’s prime location provided easy access to major attractions while offering a serene and tranquil environment.',
    },
    {
      id: 5,
      image: '/images/testimonial5.jpg', // Replace with actual image path
      name: 'Olivia Brown',
      text: 'A fantastic experience at H-Konnect. From the moment we arrived, we were treated like VIPs. The room was beautifully decorated, and the amenities were top-notch.',
    },
  ];

import { EffectCards } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className=' bg-[url("/testimonial.png")]'>
    <h2 className='text-2xl text-center lg:text-4xl font-bold mt-10 pt-10 '>
      Happy <span className='text-primary'>Clients</span>
    </h2>
    <div className='lg:flex max-w-[1300px] mx-auto items-center justify-center py-6 sm:py-8'>
    <div className='text-lg text-center sm:text-2xl lg:text-3xl lg:w-[50%] font-bold mb-6 mx-auto'>
  <div className='flex justify-center mb-2'>
    <FaQuoteLeft className='text-primary' />
  </div>
  <h2>
    Explore the Voices of Those Who Have <br /><span className='text-primary'>Experienced Our Services</span>
  </h2>
</div>
      <div className="w-full max-w-[400px] overflow-hidden sm:overflow-visible sm:w-[50%] mx-auto my-12">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          spaceBetween={10} // Adjust space between slides
          slidesPerView={1} // Ensure only one slide is visible at a time
          centeredSlides={true} // Center slides
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className='border overflow-hidden rounded-md h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] shadow-2xl p-4 flex flex-col items-center mx-auto'>
                <div className='rounded-full overflow-hidden h-[40%] w-[40%] sm:w-[40%] sm:h-[40%]'>
                  <img src="/about/1.png" alt={testimonial.name} className='w-full h-full object-cover' />
                </div>
                <h2 className='text-2xl font-bold mt-3 text-center'>{testimonial.name}</h2>
                <p className='text-base text-gray-700 mt-2 text-center'>" {testimonial.text} "</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
  

  );
};

export default Testimonials;
