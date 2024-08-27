import Link from 'next/link'
import React from 'react'

const Productcard = ({ product, isfeatured = false }) => {


  return (
    <div key={product.term_id} className="flex flex-col items-center bg-white border rounded-lg shadow-lg relative group overflow-hidden">
      <div className="relative p-2 overflow-hidden w-full h-60">
        <img
          src={product.meta_fields.product_image[0]}
          alt={product.name}
          className="w-full h-full rounded-lg object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div> */}

        {
          isfeatured &&
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded">
            <img
              src="/badge.png" // Replace with your badge image path
              alt="Badge"
              className="w-8 h-8"
              style={{ width: '2.5rem', height: '2.5rem' }}
            />
            {/* <span className='text-white text-sm'>Featured</span> */}
          </div>
        }
      </div>

      <div className='p-4 pt-1'>
        <h3 className="text-lg text-left  line-clamp-1 font-semibold mb-3 mt-1">
          {product.title}
        </h3>
        <div className="w-[70%] mt-2 text-left mb-3 h-0.5 bg-primary rounded-full"></div>
        {/* <p className="text-gray-500 text-left line-clamp-4 text-sm">
                    {product.meta_fields.product_description}
                  </p> */}
        {Object.keys(product.meta_fields["table-data"] || {})
          .slice(0, 4) // Get the first four keys
          .map((key, index) => {
            const item = product.meta_fields["table-data"][key];
            return item.column && item.data ? (
              <p className='text-left  text-base line-clamp-1 border-b pb-1 mb-2 ' key={index}>
                <span className='font-medium  '>{item.column}</span> : <span className='text-primary'>{item.data}</span>
              </p>
            ) : null;
          })}
        <Link href={`/product/${product.slug}`}>
          <span className='bg-gradient-to-r block cursor-pointer hover:scale-95 duration-200 w-full from-primary to-secondary text-center px-4 py-1.5 mt-4 text-base text-white font-bold gap-2'>
            View Details
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Productcard



