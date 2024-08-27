import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='md:flex mt-20 mx-4 md:mx-36 my-10 md:my-20 gap-10'>
    <div className=' w-full md:w-1/2 mt-12'>
    <h2 className='font-[antonio] font-semibold text-3xl sm:text-6xl sm:leading-[70px]'>WELCOME TO <br/><span className='text-primary font-[antonio]'>RUBY ENGINEERING</span></h2>
      <img src="/about1.png" className='md:-mt-20 w-full md:w-1/2 block sm:hidden ' />
      <p className='text-xl md:my-4 mt-0'>We Have 15+ Years Of Experience in Help Succeed Service!</p>
      <p className='text-base text-gray-500'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
      <Link href="/contact-us" className='bg-gradient-to-r from-primary to-secondary px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center hover:opacity-80 gap-2'>Contact Us <ArrowRight size={20} color="white" /></Link>
    </div>
    <img src="/about1.png" className='md:-mt-20 w-full md:w-1/2 sm:block hidden ' />
  </div>
  )
}

export default Aboutus
