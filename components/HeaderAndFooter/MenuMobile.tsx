import Link from "next/link";
import React from "react";
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
  const data = [
    {
      id: 8,
      name: "Home",
      url: "/",
    },
    {
      id: 1,
      name: "Facilities",
      subMenu: true,
    },
    {
      id: 2,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 3,
      name: "Contact Us",
      contact: true,
    },
    {
      id: 5,
      name: "Careers",
      url: "/careers",
    },
  ];

  return (
    <>
      <ul className="flex flex-col lg:hidden font-normal text-lg absolute top-[12svh] left-0 w-full h-[calc(100svh-80px)] bg-white border-t text-black">
        {data.map((item) => {
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
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                      {subMenuData?.map((subItem, index) => {
                        return (
                          <Link
                            key={index}
                            href={
                              subItem.slug === "poly-clinic"
                                ? `/doctor`
                                : `/category/${subItem?.slug}`
                            }
                          >
                            <li
                              onClick={() => setMobileMenu(false)}
                              className="h-12 flex justify-between items-center px-10 hover:bg-gray-100 rounded-md transition-all ease-in-out"
                            >
                              {subItem?.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : item?.contact ? (
                <li
                  className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                  onClick={() => setShowContactMenu(!showContactMenu)}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    <BsChevronDown size={14} />
                  </div>

                  {showContactMenu && (
                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                      {contactData?.map((contactItem, index) => {
                        return (
                          <Link key={index}  href={`/contact-us?page=${contactItem}`}>
                            <li
                              onClick={() => setMobileMenu(false)}
                              className="h-12 flex justify-between items-center px-10 hover:bg-gray-100 rounded-md transition-all ease-in-out"
                            >
                              {contactItem?.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => setMobileMenu(false)}>
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
