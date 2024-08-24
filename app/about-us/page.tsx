import Ourteam from '@/components/About/Ourteam'
import Whychooseus from '@/components/About/Whychooseus'
import Banner from '@/components/Banner'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <main>

    <div className='relative'>
    <Banner
      title="About Us"
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page="About"
      />
    <img    
      src="/paper2.png" 
      className='absolute left-1/2 transform -translate-x-1/2  -translate-y-[200px]  z-10' 
      />
  </div>


  {/* //////////////SECTION 1 //////////////// */}



  <div className='flex mt-20 mx-36 gap-10'>
    <div className='w-1/2 mt-20'>
      <h2 className='font-[antonio] text-4xl'>WELCOME TO RUBY ENGINEERING</h2>
      <p className='text-xl my-4'>We Have 15+ Years Of Experience in Help Succeed Service!</p>
      <p className='text-base text-gray-500'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
      <p className='bg-primary px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center gap-2'>Contact Us <ArrowRight size={20} color="white" /></p>
    </div>
    <img src="/about1.png" className='-mt-20 w-1/2 ' />
  </div>
  {/* //////////////SECTION 1 //////////////// */}
    <Whychooseus />
    <Ourteam/>
      </main>
  )
}

export default Page
