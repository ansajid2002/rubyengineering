
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Ourcategories = ({categories}) => {

  
    return (
        <div className=" px-4 md:px-20 py-8">
        <h2 className="text-4xl font-semibold text-center font-[antonio] mb-8"></h2>
{/* 
        <p className="text-base text-primary font-bold text-center">Popular</p> */}
            <h2 className=" text-3xl md:text-5xl font-[antonio] text-center mb-8">Our Categories</h2>
            <div className="w-48 mx-auto -mt-4  mb-8 h-0.5 bg-primary rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <Link href={`/subcategories/${category.slug}`}
              key={category.term_id}
              className="flex flex-col items-center bg-white  border rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={category.meta.product_type_image[0]}
                alt={category.name}
                className="w-full h-48 object-cover  mb-4"
              />
              <div className='p-4 pt-1'>
              <h3 className="text-xl line-clamp-1  font-semibold  mb-2">
                {category.name}
              </h3>
              <div className="w-[70%] mt-2 mb-3 h-0.5 bg-primary rounded-full"></div>
              <p className="text-gray-500 line-clamp-4 text-base ">{category.description}</p>
              <p className='bg-primary hover:opacity-70 duration-200 px-4 py-2 mt-4 text-lg text-white font-bold w-32 group flex items-center gap-2'>Explore <span className=' group-hover:ml-1 duration-150'><ArrowRight size={20} color="white" /></span></p>
                </div>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Ourcategories
