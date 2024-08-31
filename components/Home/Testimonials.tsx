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
    image: '/users/user4.webp', // Replace with actual image path
    name: 'Ravi Kumar',
    text: 'Ruby Engineering Works has revolutionized our production process with their top-notch masala grinding machines. The efficiency and precision are unmatched.',
  },
  {
    id: 3,
    image: '/users/user2.webp', // Replace with actual image path
    name: 'Anil Verma',
    text: 'The wheat flour machines from Ruby Engineering works have significantly improved our milling operations. The quality of the flour and the efficiency of the machines are superb.',
  },
  {
    id: 4,
    image: '/users/user1.webp', // Replace with actual image path
    name: 'Sunita Desai',
    text: 'Our experience with Ruby Engineering works has been fantastic. Their machines are reliable, and the customer service is excellent. We couldn’t be happier with our purchase.',
  },
  {
    id: 5,
    image: '/users/user5.webp',  // Replace with actual image path
    name: 'Rajesh Gupta',
    text: 'Ruby Engineering works machines have brought a new level of efficiency to our factory. The build quality and attention to detail are impressive.',
  },
];

import { EffectCards } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className=' bg-[url("/testimonial.png")]'>
    <h2 className='text-3xl font-[antonio] text-center lg:text-5xl font-medium mt-10 pt-10 '>
      Testimonials
    </h2>
    <div className="w-40 mx-auto mt-4  mb-8 h-0.5 bg-primary rounded-full"></div>
    <div className='lg:flex max-w-[1300px] mx-auto items-center justify-center pb-6 pt-2 sm:py-8'>
    <div className='text-xl text-center sm:text-2xl lg:text-3xl lg:w-[50%] font-bold mb-6 mx-auto'>
  <div className='flex justify-center mb-2'>
    <FaQuoteLeft className='text-primary' />
  </div>
  <h2 className=''>
    Explore the Voices of Those Who Have <br /><span className='text-primary'>Experienced Our Services</span>
  </h2>
</div>
      <div className="w-full ml-0  max-w-[400px] overflow-hidden sm:overflow-visible sm:w-[50%] mx-auto my-12">
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
                  <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover' />
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
