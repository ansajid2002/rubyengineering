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
  
  const fetchproductsbySubcat = async (slug) => {
    try {
      const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getproductsbysubcatslug?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch subcategories');
      }
      const data = await response.json();
   
      
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

    <Banner
      title={product_slug}
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page="Products"
      />
   
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-10 mb-10'>
  {products ? (
    products.length > 0 ? (
      products.map((product) => (
        <Productcard key={product.id} product={product} />
      ))
    ) : (
      <div className="col-span-full text-center text-gray-500 text-xl">
        No products found
      </div>
    )
  ) : (
    [...Array(6)].map((_, index) => (
      <div key={index} className="p-2 box-border">
        <div className="relative aspect-w-1 h-[200px] md:h-[220px] xl:h-[300px] overflow-hidden">
          <div className="skeleton w-full h-full bg-gray-200"></div> {/* Skeleton placeholder */}
        </div>
      </div>
    ))
  )}
</div>
    </div>

    )
}

export default Page
