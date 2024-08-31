import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='md:flex mt-20 mx-4 md:mx-36 my-10 md:my-20 gap-10'>
    <div className=' w-full md:w-1/2 mt-12'>
    <h2 className='font-[antonio] font-semibold text-3xl sm:text-5xl sm:leading-[60px]'>WELCOME TO <br/><span className='text-primary font-[antonio]'>RUBY ENGINEERING WORKS</span></h2>
      <img src="/about1.png" className='md:-mt-20 w-full md:w-1/2 block sm:hidden ' />
      <p className='text-xl md:my-4 mt-0'>We Have 15+ Years Of Experience in Help Succeed Service!</p>
      <p className='text-base text-gray-500'>At Ruby Engineering Works, we are committed to excellence in manufacturing top-of-the-line wheat flour machines, masala grinding machines, and pulverizers. With a focus on precision and durability, our machines are designed to enhance productivity and ensure consistent, high-quality output for all your milling and grinding needs. Trust us to deliver reliable solutions that drive your business forward.</p>
      <Link href="/contact-us" className='bg-gradient-to-r from-primary to-secondary px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center hover:to-primary gap-2'>Contact Us <ArrowRight size={20} color="white" /></Link>
    </div>
    <img src="/about1.png" className='md:-mt-20 w-full md:w-1/2 sm:block hidden ' />
  </div>
  )
}

export default Aboutus
