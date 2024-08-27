"use client";
import { BACKEND_URL } from '@/app/page';
import Banner from '@/components/Banner';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { cat_slug } = useParams();

  const [subcategories, setSubcategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubcategories = async (slug) => {
    try {
      const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getsubcategoriesbyslug?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch subcategories');
      }
      const data = await response.json();
      
      setSubcategories(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cat_slug) {
      fetchSubcategories(cat_slug);
    }
  }, [cat_slug]);

  return (
    <div>

    <Banner
      title={`${cat_slug}`}
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page={`${cat_slug}`}
      />
  
    <div className=" mx-4 lg:mx-14 xl:mx-20 mb-12" >

    <div className="container mx-auto my-4">
 
  {subcategories && subcategories.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
      {subcategories?.map((post, index) => {
     
        return (
          <Link href={`/products/${post.slug}`} key={index} className="post-container rounded-xl box-border border shadow-md border-gray-100 ">
          <div className="relative aspect-w-1 md:h-[220px]  xl:h-[300px] overflow-hidden rounded-t-md ">
            <img
              src={post?.meta?.product_type_image[0]}
              alt={post?.title || "Post Image"}
              className="w-full h-full object-cover"
            />
            <div className="overlay"></div>
            <div
      className="description  line-clamp-3 text-red-100"
      dangerouslySetInnerHTML={{
        __html:post?.description ,
      }}
    ></div>
    <p className="z-30  flex items-center justify-center text-2xl font-semibold description mt-16">{`View Products `}<span className="ml-1"> <ChevronRight strokeWidth={3} color="white" className="text-white" size={16} /></span> </p>
          </div>
          {/* <h2 className="text-2xl font-[400] text-center mt-1 mb-3">{post.title}</h2> */}
          <div
      className="text-xl font-[400] text-center mt-3 mb-4"
      dangerouslySetInnerHTML={{
        __html:post.name,
      }}
    ></div>
        </Link>
            )
      })}
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="p-2 box-border">
          <div className="relative aspect-w-1 h-[200px] md:h-[220px] xl:h-[300px] overflow-hidden">
            <div className="skeleton w-full h-full bg-gray-200"></div> {/* Skeleton placeholder */}
          </div>
          {/* <div className="skeleton h-6 mt-2 bg-gray-200"></div> Title skeleton */}
        </div>
      ))}
    </div>
  )}
</div>


    </div>
    </div>

  );
};

export default Page;
