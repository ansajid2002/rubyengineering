
import { ArrowRight } from 'lucide-react';
import React from 'react'

const Ourproducts = ({products}) => {
//   console.log(categories,"categoriescategories");
  
  
    return (
        <div className="px-20 py-8">
        <h2 className="text-4xl font-semibold text-center font-[antonio] mb-8">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.term_id}
              className="flex flex-col items-center bg-white  border rounded-lg shadow-lg"
            >
              <img
                src={product.meta.product_type_image[0]}
                alt={product.name}
                className="w-full h-48 object-cover  mb-4"
              />
              <div className='p-4 pt-1'>
              <h3 className="text-xl font-[antonio] font-semibold  mb-2">
                {product.name}
              </h3>
              <div className="w-[70%] mt-2 mb-3 h-0.5 bg-primary rounded-full"></div>
              <p className="text-gray-500 line-clamp-4 text-base ">{product.description}</p>
              <p className='bg-primary px-4 py-2 mt-4 text-lg text-white font-bold w-32 flex items-center gap-2'>Explore <ArrowRight size={20} color="white" /></p>
                </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Ourproducts
