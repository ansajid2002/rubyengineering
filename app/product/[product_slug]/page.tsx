"use client"

import { BACKEND_URL } from '@/app/page';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from '@/components/Banner';

const Page = () => {

    const { product_slug } = useParams();
  const [productdetails, setProductdetails] = useState(null);

  const fetchproductsbySubcat = async (slug) => {
    try {
      const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getproductbyslug?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch subcategories');
      }
      const data = await response.json();

      
      setProductdetails(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
   
    } 
  };

  useEffect(() => {
    if (product_slug) {
      fetchproductsbySubcat(product_slug);
    }
  }, [product_slug]);
  
  
  return (
    <div className='min-h-[100vh]'>
       <Banner
      title={product_slug}
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page="Details"
      />
      <div className="w-full">
        <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
          <div className="flex flex-col md:flex-row gap-[0px] md:gap-[40px]">
            {/* Left col start */}
            <div className="w-full md:w-auto flex-[0.7] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[70px]">
                {
                  productdetails ?
                  <div className=''>
                    <Carousel
                      infiniteLoop={true}
                      showIndicators={false}
                      showStatus={false}
                      thumbWidth={75}
                      className="productCarousel"
                    >
                      <img className=' shadow-2xl border border-black' src={productdetails?.meta_fields?.product_image[0]} alt="Product" />
                      <img src={productdetails?.meta_fields?.product_image[0]} alt="Product" />
                      
                    </Carousel>
                      </div>
                    :
                    <div className="relative  h-[300px] md:h-[500px] rounded-md w-full md:w-[80%] md:mx-auto bg-gray-200 overflow-hidden">
                    <div className='skeleton'></div>
                      </div>
                }
              </div>
            </div>
            {/* Right col start */}
            <div className="flex-[1] md:-mt-4 py-3">
              {
                productdetails ?
                  <>
                    <div className=" text-2xl md:text-4xl font-semibold mb-0 leading-tight">
                      {productdetails?.title}
                    </div>
                    <div className=" text-xl md:text-3xl font-[500] mt-8 border-b-2 w-28 pb-1 border-primary  mb-4">Principle</div>
                    {/* <div className="text-2xl font-[400] text-gray-500 mb-2">{productdetails?.meta_fields?.the_principle[0]}</div> */}
                    <div
                      className="text-justify text-base md:text-base text-[#3f3f3f]"
                      dangerouslySetInnerHTML={{
                        __html: productdetails?.meta_fields?.the_principle[0] || "", // Safely access the HTML content
                      }}
                    ></div>
                      
                     <div className=" text-xl md:text-3xl font-[500] mt-10 border-b-2 w-28 pb-1 border-primary  mb-4">Specifications</div>
              
              
              
              <div className='overflow-x-scroll sm:overflow-x-auto'>

                    <table className="w-full text-left border-collapse">
  <thead>
    <tr className="border">
      <th className="py-2 font-medium border border-gray-500 pl-1 pr-1">No. </th> {/* Serial Number Column */}
      {Object.values(productdetails.meta_fields["table-data"] || {})
        .reduce((acc, item) => {
          const normalizedKey = item?.column?.toLowerCase(); // Normalize key to lowercase

          if (normalizedKey && !acc.some(entry => entry.key === normalizedKey)) {
            acc.push({ key: normalizedKey, displayName: item.column });
          }

          return acc;
        }, [])
        .map((item, index) => (
          <th key={`${item.key}_${index}`} className="py-2 font-medium border border-gray-500 pl-1 pr-1">
            {item.displayName || item.key}
          </th>
        ))}
    </tr>
  </thead>
  <tbody>
    {Object.values(productdetails.meta_fields["table-data"] || {})
      .reduce((acc, item) => {
        const normalizedKey = item?.column?.toLowerCase(); // Normalize key to lowercase
        const existingIndex = acc.findIndex(entry => entry.key === normalizedKey);

        if (existingIndex === -1) {
          acc.push({ key: normalizedKey, data: [item.data] });
        } else {
          // If the key already exists, push the data to the existing entry
          acc[existingIndex].data.push(item.data);
        }

        return acc;
      }, [])
      .reduce((rows, column, index, array) => {
        const maxLength = Math.max(...array.map(col => col.data.length)); // Find the maximum row length

        for (let i = 0; i < maxLength; i++) {
          if (!rows[i]) rows[i] = []; // Initialize the row if it doesn't exist
          rows[i].push(column.data[i] || ''); // Add the data to the row, or an empty string if undefined
        }

        return rows;
      }, [])
      .map((row, rowIndex) => (
        <tr key={`row_${rowIndex}`}>
          <td key={`serial_${rowIndex}`} className="py-2 text-primary border border-gray-500 pl-1 pr-1">
            {rowIndex + 1}
          </td> {/* Serial Number Cell */}
          {row.map((data, colIndex) => (
            <td key={`col_${colIndex}`} className="py-2 min-w-24 md:min-w-28 text-primary  border border-gray-500 pl-1 pr-1">
              {data}
            </td>
          ))}
        </tr>
      ))}
  </tbody>
</table>
</div>



<div className=" text-xl md:text-3xl font-[500] mt-10 border-b-2 w-28 pb-1 border-primary mb-4 ">description</div>
                    <div
                      className="text-justify text-base md:text-base text-[#3f3f3f]"
                      dangerouslySetInnerHTML={{
                        __html: productdetails?.meta_fields?.product_description || "", // Safely access the HTML content
                      }}
                    ></div>
                    
                  </>
                  :
                  <div className=" h-[400px] md:h-[450px] mt-24 md:mt-0 w-full flex flex-col justify-center">
                    <div className="text-[40px] bg-gray-200 w-[60%] h-24 rounded-lg font-semibold mb-3 leading-tight"></div>
                    <div className="text-2xl font-[400] text-gray-500  mb-3 rounded-lg w-[40%] h-14 mr-auto bg-gray-200"></div>
                    <div className="text-lg bg-gray-200 w-[55%] mb-6 rounded-lg md:text-xl h-14 font-[600] "></div>
                    
                    <div className='my-6 w-full '>
                      <h2 className='text-lg md:text-xl font-[600] bg-gray-200 w-[30%] rounded-lg mb-2 h-4 '></h2>
                      <p className='font-[400] bg-gray-200 w-[70%] rounded-lg h-8 mb-2 text-base md:text-xl'></p>
                      <p className='font-[400] bg-gray-200 w-[70%] h-8 rounded-lg text-base md:text-xl'></p>
                    </div>
                    <p className='font-[400] mt-4 bg-gray-200 w-[30%] h-16 mb-2 rounded-lg text-base md:text-xl'></p>
                      <p className='font-[400] bg-gray-200 w-[80%] h-72 rounded-lg text-base mb-8 md:text-xl'></p>
                      <p className='font-[400] bg-gray-200 w-[45%] h-36  rounded-full  text-base md:text-xl'></p>
                  </div>
              }
            </div>
            {/* Right col end */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
