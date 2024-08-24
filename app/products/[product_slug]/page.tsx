"use client"
import { BACKEND_URL } from '@/app/page';
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
      
    </div>
  )
}

export default Page
