"use client";
import { BACKEND_URL } from '@/app/page';
import Banner from '@/components/Banner';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Productcard from '@/components/Productcard';

const Page = () => {
  const { product_slug } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    current_page: 1,
    next_page: 2,
    products_per_page: 10,
    total_pages: 1,
    total_products: 0,
  });

  const fetchProductsBySubcat = async (page = 1) => {
    try {
      const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getAllProducts?per_page=${pagination.products_per_page}&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.products);
      setPagination(data.pagination);  // Assuming your API sends back pagination details here
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsBySubcat(page);
  }, [page]);

  const handlePageChange = (page) => {
    setPage(page);
    fetchProductsBySubcat(page);
  };

  // Scroll to top effect when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div>

        <Banner
          title="All Products"
          bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
          page="All Products"
        />
       

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20 '>
        {products ? (
          products?.map((product) => {
            return (
              <Productcard product={product} />
            );
          })
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

      {/* Pagination Component */}
      <div className="flex justify-center my-8">
        <Pagination
          current={pagination.current_page}
          total={pagination.total_products}
          pageSize={pagination.products_per_page}
          onChange={handlePageChange}
          showSizeChanger={false} // Hide the option to change page size
        />
      </div>
    </div>
  );
}

export default Page;
