"use client"
import { BACKEND_URL } from '@/app/page';
import Banner from '@/components/Banner';
import Productcard from '@/components/Productcard';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { product_slug } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(product_slug,"product_slug");
  
  const fetchproductsbySubcat = async (slug) => {
    try {
      const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getproductsbysubcatslug?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch subcategories');
      }
      const data = await response.json();
      console.log(data,"subcategorieees ddata");
      
      setProducts(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (product_slug) {
      fetchproductsbySubcat(product_slug);
    }
  }, [product_slug]);

  return (
    <div>
<div className='relative'>
    <Banner
      title={product_slug}
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page="Details"
      />
    <img    
      src="/paper2.png" 
      className='absolute left-1/2 transform -translate-x-1/2  -translate-y-[200px]  z-10' 
      />
  </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-10 mt-20'>
      {
        products ?  products?.map((product) => {
          return (
            <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg relative group overflow-hidden"
            >
                 <Productcard product={product} />
              </div>
          )
        }) 
        : (
          [...Array(6)].map((_, index) => (
            <div key={index} className="p-2 box-border">
              <div className="relative aspect-w-1 h-[200px] md:h-[220px] xl:h-[300px] overflow-hidden">
                <div className="skeleton w-full h-full bg-gray-200"></div> {/* Skeleton placeholder */}
              </div>
            </div>
          ))
        )
      }
    </div>
    </div>

    )
}

export default Page
