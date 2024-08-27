import Link from "next/link";
import React, { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  subMenuData,
  contactData,
  showContactMenu,
  setShowContactMenu,
}) => {
  const menuItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about-us" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Products", url: "/products" },
    { id: 5, name: "Contact Us", url: "/contact-us" },
  ];
  


  return (
    <>
      <ul className="flex flex-col lg:hidden font-normal text-lg absolute top-[8svh] h-[100vh] left-0 w-full bg-white border-t text-black z-50">
        {menuItems.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {item?.subMenu ? (
                <li
                  className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                  onClick={() => setShowCatMenu(!showCatMenu)}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    <BsChevronDown size={14} />
                  </div>

                  {showCatMenu && (
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4 max-h-[50vh] overflow-y-scroll">
                      {subMenuData?.map((category, index) => {
                        return (
                          <Link
  key={index}
  href={`/subcategories/${category.parent_slug}`}
  onClick={() => {
    setShowCatMenu(!showCatMenu);
    setMobileMenu(false); // Close the mobile menu on click
  }}
>
                            <li
                              onClick={() => setMobileMenu(false)}
                              className="h-12 flex justify-between items-center px-10 hover:bg-gray-50 border-b border-white rounded-md transition-all ease-in-out text-sm my-1"
                            >
                              {category?.parent_name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => {
setMobileMenu(false)}
                  } >
                    {item.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
