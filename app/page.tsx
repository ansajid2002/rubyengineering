import Aboutus from "@/components/Home/Aboutus";
import Homebanner from "@/components/Home/Homebanner";
import Ourcategories from "@/components/Home/Ourcategories";
import Ourproducts from "@/components/Home/Ourproducts";
import Ourservices from "@/components/Home/Ourservices";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

// export const BACKEND_URL = process.env.BACKEND_URL 
export const BACKEND_URL="https://rubyeng.demo-web.live"

const getAllcategories = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getProductTypeParentCategories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

const getFeaturedProducts = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/wp-json/custom/v1/getFeaturedProduct`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array or handle the error as needed
  }
}




export default async function Home() {
  const categories = await getAllcategories();
  const featuredproducts = await getFeaturedProducts()
  return (
    <main className="min-h-[120vh]">
      <Homebanner />
      <Aboutus />
      <Ourservices />
      <Ourcategories categories={categories} /> {/* Pass categories to Ourcategories component */}
      <Testimonials/> 
      <Ourproducts featuredproducts = {featuredproducts} />
    </main>
  );
}
