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
    <div className="hidden md:flex h-[12svh] px-16 bg-gradient-to-r from-primary to-primary items-center justify-between">
     <Link href={"/"} className="flex">
        <img
          src="/mainlogo1.png"
          className="w-[180px] md:w-[280px]"
          alt="ruby"
          onClick={() => setMobileMenu(false)}
        />

      </Link>
      <div className="flex items-center gap-10">
        <div className="flex items-start gap-2">
         <div className="p-2.5 bg-white rounded-full" >
          <PhoneCall color="#00008b" size={25}/>
          </div> 
          <div className="text-white">
            <p className="text-white text-lg">PHONE NO.</p>
            <p className="text-white text-base -mt-1.5"> <a href="tel:+919892582134">+91 9892582134</a></p>
          </div>
        </div>
        <div className="flex items-start gap-2">
         <div className="p-2.5 bg-white rounded-full" >
          <Mail color="#00008b" size={25}/>
          </div> 
          <div className="text-white">
            <p className="text-white text-lg">EMAIL ADDRESS</p>
            <p className="text-white text-base -mt-1.5"><a href="mailto:ruby.e.works@gmail.com">ruby.e.works@gmail.com</a></p>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Announcement;
