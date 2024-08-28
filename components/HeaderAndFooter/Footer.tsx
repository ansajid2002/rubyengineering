
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  MapPinned,
  Phone,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";



const Footer = async () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 border-t mt-20">
      <div className=" px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/mainlogo.png"
              className="mr-5 w-[150px] md:w-[280px]"
              alt="Footer Logo"
            />
            <p className="mt-1 text-base font-light">
            At Ruby Engineering, we excel in developing cutting-edge machinery that enhances efficiency and performance in food processing. 
            </p>
            
          </div>
          <div className="grid grid-cols-1 gap-5 px-3 lg:px-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="font-bold text-xl">Quick Links</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-2 text-base">
                <Link className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" href={"/"}>
                   <ArrowRight size={16}/><span className="hover:text-primary">Home</span>  
                </Link>
                <Link className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"  href={"/about-us"}>
                   <ArrowRight size={16}/><span className="hover:text-primary">About Us</span>  
                </Link>
                <Link className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"  href={"/products"}>
                   <ArrowRight size={16}/><span className="hover:text-primary">Products</span>  
                </Link>


                <Link className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200" href={"/contact-us"}>
                  <ArrowRight className="" size={16}/><span className="hover:text-primary">Contact Us </span>  
                </Link>

                {/* {categories &&
                  categories?.map((item, index) => (
                    <>
                      <Link
                        key={index}
                        className="hover:text-primary"
                        href={`/category/${item?.slug}?cid=${item?.id}`}
                      >
                        {item?.name}
                      </Link>
                    </>
                  ))} */}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Popular Categories</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-2 text-base">
                <Link className="hover:text-primary" href={"/subcategories/air-lock"}>
                  Air Lock
                </Link>
                <Link className="hover:text-primary" href={"/subcategories/bearings"}>
                  Bearings
                </Link>
                <Link className="hover:text-primary" href={"/subcategories/dust-collectors"}>
                  Dust Collectors
                </Link>
                <Link className="hover:text-primary" href={"/subcategories/hydrolic-system"}>
                  Hydrolic Systems
                </Link>

              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Contact Info</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="space-y-3 mt-4 text-sm">
                <div className="flex  items-center gap-2">
                  <div>
                    <MapPin  size={20} color="#00008b" />
                  </div>
                  <h2>
                  Ruby Engineering Works<br/>
                  175 Memni building dimtimkar Road Nagpada near Darul Muadda Tower MUMBAI 400008
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+919820891821">+91 98208 91821</a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+919594082134">+91 95940 82134</a>
                </div>

                <div className="flex items-center gap-2">
                  <MailIcon size={20} color="#00008b" />
                  <a href="mailto:ruby.e.works@gmail.com">
                  ruby.e.works@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="mt- text-base text-center">
          © {currentYear} All Rights Reserved{" "}
          <a href="/" className="text-primary" target="_blank">
            Ruby Engineering
          </a>{" "}
          | Crafted by{" "}
          <a
            href="https://sagartech.co.in/"
            className="hover:text-primary"
            target="_blank"
          >
            Sagar Tech - Technical Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
