
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
    <footer className="bg-gray-100 text-gray-800 border-t">
      <div className=" px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/logodemo.webp"
              className="mr-5 w-[150px] md:w-[240px]"
              alt="Footer Logo"
            />
            {/* <h2 className="text-4xl font-title">vcare</h2> */}
            <p className="mt-4 text-base font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="pt-4">
            <div className="flex  space-x-4">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 m-1.5 bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin color="#FF6600" size={18} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 m-1.5 bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Facebook"
      >
        <Facebook color="#FF6600" size={18} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 m-1.5 bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Twitter"
      >
        <Twitter color="#FF6600" size={18} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 m-1.5 bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="YouTube"
      >
        <Youtube color="#FF6600" size={18} />
      </a>
    </div>
            </div>
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
                <Link className="hover:text-primary" href={"/privacy-policy"}>
                  Pulveriser
                </Link>
                <Link className="hover:text-primary" href={"/terms-and-conditions"}>
                  Grinder
                </Link>
                <Link className="hover:text-primary" href={"/refund-and-cancellation"}>
                  Equipments
                </Link>
                <Link className="hover:text-primary" href={"/refund-and-cancellation"}>
                  Equipments
                </Link>

              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Contact Info</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="space-y-2 mt-4 text-sm">
                <div className="flex  items-center gap-2">
                  <div>
                    <MapPin  size={20} color="#fb7701" />
                  </div>
                  <h2>
                  Gr floor Bhagyashree apartment Gupte chowk kalyan west,  Maharashtra 421301.
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#fb7701" />
                  <a href="tel:+919152709243">+91 97685 88108</a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon size={20} color="#fb7701" />
                  <a href="mailto:Info@vcare.centre">
                    Info@vcare.centre
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
