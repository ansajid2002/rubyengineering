"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { Modal, Button } from 'antd';
import { Linkedin, Facebook, Twitter, Youtube, PhoneCall, Phone } from 'lucide-react';
import { BACKEND_URL } from "@/app/page";
import { BsTelephone } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center gap-2 font-bold">
                  <Phone size={20} color="#00008b" />
                  <a href="tel:022-23088552">022-23088552</a>
                </div>
    <div className="h-6 w-0.5 bg-black"></div>
                <div className="flex items-center font-bold gap-2">
                  <Phone size={20} color="#00008b" />
                  <a href="tel:+917400482134">74004 82134</a>
                </div>

    </div>
  );
};

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [subMenuData, setSubMenuData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const divRef = useRef(null);
  
  const handleCloseDiv = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/wp-json/custom/v1/getProductTypeSubCategories`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setSubMenuData(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleCloseDiv);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleCloseDiv);
    };
  }, []);

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const [headerClass, setHeaderClass] = useState("sticky top-0 z-50 bg-gray-100 w-full");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderClass("fixed top-0  z-50 bg-gray-100 shadow-md w-[99vw]");
      } else {
        setHeaderClass("sticky top-0 z-50 bg-gray-100 w-full");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <header
      className={`${headerClass} px-5 lg:px-20 h-[8svh] flex items-center justify-between transition-transform duration-300`}
    >
      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
        subMenuData={subMenuData}
        setMobileMenu={setMobileMenu}
      />

      {mobileMenu && (
        <MenuMobile
          subMenuData={subMenuData}
          showCatMenu={showCatMenu}
          showContactMenu={showContactMenu}
          setShowCatMenu={setShowCatMenu}
          setShowContactMenu={setShowContactMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className="flex items-center gap-2 justify-between w-full md:w-auto text-black">
        <div className="hidden md:flex gap-3 rounded-full justify-center md:justify-between items-center cursor-pointer relative">
          <SocialIcons />
        </div>
        <Link href={"/"} className="block md:hidden">
          <img
            src="/mainlogo2.png"
            className="w-[180px] md:w-[250px]"
            alt="ruby"
            onClick={() => setMobileMenu(false)}
          />
        </Link>
        {/* Mobile Icon Start */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center cursor-pointer relative -mr-2">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[20px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[30px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
