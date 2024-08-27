"use client"
import {
 
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
  PhoneCall,
  Twitter,
} from "lucide-react";
import { Facebook, Instagram, YouTube, LinkedIn } from 'lucide-react'
import Link from "next/link";
import React, { useState } from "react";


const Announcement = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="hidden md:flex h-[12svh] px-16 bg-gradient-to-r from-[#c6d8ff] to-secondary items-center justify-between">
     <Link href={"/"} className="flex">
        <img
          src="/mainlogo.png"
          className="w-[180px] md:w-[250px]"
          alt="vcare"
          onClick={() => setMobileMenu(false)}
        />
        {/* <h1 className="font-[500] text-[30px] font-greatvibes">vcare</h1> */}
      </Link>
      <div className="flex items-center gap-10">
        <div className="flex items-start gap-2">
         <div className="p-2.5 bg-white rounded-full" >
          <PhoneCall color="#00008b" size={25}/>
          </div> 
          <div className="text-white">
            <p className="text-white text-lg">PHONE NO.</p>
            <p className="text-white text-base -mt-1.5">+91 1234567890</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
         <div className="p-2.5 bg-white rounded-full" >
          <Mail color="#00008b" size={25}/>
          </div> 
          <div className="text-white">
            <p className="text-white text-lg">EMAIL ADDRESS</p>
            <p className="text-white text-base -mt-1.5">support@ruby.com</p>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Announcement;
