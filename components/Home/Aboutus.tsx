import { ArrowRight } from 'lucide-react'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='flex mt-20 mx-36 gap-10'>
    <div className='w-1/2 mt-12'>
      <h2 className='font-[antonio] font-semibold text-4xl'>WELCOME TO RUBY ENGINEERING</h2>
      <p className='text-xl my-4'>We Have 15+ Years Of Experience in Help Succeed Service!</p>
      <p className='text-base text-gray-500'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
      <p className='bg-primary px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center gap-2'>Contact Us <ArrowRight size={20} color="white" /></p>
    </div>
    <img src="/about1.png" className='-mt-20 w-1/2 ' />
  </div>
  )
}

export default Aboutus
