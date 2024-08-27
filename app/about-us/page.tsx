import Ourteam from '@/components/About/Ourteam'
import Whychooseus from '@/components/About/Whychooseus'
import Banner from '@/components/Banner'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <main>

 
    <Banner
      title="About Us"
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page="About"
      />
   


  {/* //////////////SECTION 1 //////////////// */}


  <div className='md:flex  mx-4 md:mx-10 xl:mx-36 my-10 -mt-10 md:mt-2 md:mb-10 gap-4 lg:gap-10'>
    <div className=' w-full md:w-1/2 mt-12'>
      <h2 className='font-[antonio] font-semibold text-3xl sm:text-6xl sm:leading-[70px]'>WELCOME TO <br/><span className='text-primary font-[antonio]'>RUBY ENGINEERING</span></h2>
      <img src="/about1.png" className='md:-mt-20 w-full md:w-1/2 block sm:hidden ' />
      <p className='text-xl md:my-4 mt-0'>We Have 15+ Years Of Experience in Help Succeed Service!</p>
      <p className='text-base text-gray-500'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
      <p className='bg-primary px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center gap-2'>Contact Us <ArrowRight size={20} color="white" /></p>
    </div>
    <img src="/about1.png" className='md:-mt-20 w-full md:w-1/2 sm:block hidden ' />
  </div>
  {/* //////////////SECTION 1 //////////////// */}
    <Whychooseus />
    <Ourteam/>
      </main>
  )
}

export default Page
