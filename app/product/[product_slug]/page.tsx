"use client"

import { BACKEND_URL } from '@/app/page';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const { product_slug } = useParams();
  const [productdetails, setProductdetails] = useState(null);
  console.log(product_slug,"product_sluginner");
  const fetchproductsbySubcat = async (slug) => {
    try {
      const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getproductbyslug?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch subcategories');
      }
      const data = await response.json();
      console.log(data,"subcategorieees ddata");
      
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
    <div>
      
    </div>
  )
}

export default Page
