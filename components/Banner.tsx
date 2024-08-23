import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Banner = ({ title, bgImg, page }) => {
  return (
    <div
      className=" bg-bottom h-auto text-white py-20 md:py-28 object-cover relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" ,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl text-white lg:text-5xl uppercase font-semibold">
          {title}
        </h2>
        <div>
          <ul className="flex items-center text-sm justify-center gap-1 pt-2">
            <li className="font-medium text-white "><Link href="/">Home</Link></li>
            <ChevronRight size={19} color="white" className="text-white " />
            <li className="text-white ">{page}</li>
          </ul>
        </div>
      </div>
         
    </div>
  );
};

export default Banner;