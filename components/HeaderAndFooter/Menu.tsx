import { ArrowBigDown, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { MdTextRotationAngledown } from "react-icons/md";

const Menu = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData,
  contactData,
  setShowContactMenu,
  showContactMenu,
}) => {
  const path = usePathname();

  const data = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
  
    {
      id: 2,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 3,
      name: "Categories",
      subMenu: true,
    },
    {
      id: 4,
      name: "Products",
      url: "/products",
    },
    {
      id: 5,
      name: "Contact Us",
      url : "/contact-us"

    },
   
  ];

  return (
    <>
      <ul className="hidden lg:flex items-center gap-8 text-black">
        {data.map((item) => {
          const isActive = path === item.url;

          return (
            <React.Fragment key={item.id}>
              {item?.subMenu ? (
                <li
                  className={`cursor-pointer uppercase text-[14px] flex items-center hover:text-primary group gap-x-0.5 gap-y-2 relative`}
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  {item.name}
                  <GoTriangleDown
                    size={18}
                    className="transition-all ease-in-out duration-500 group-hover:-rotate-180"
                  />

                  {showCatMenu && (
                    <div className="absolute top-3 -left-[80px] min-w-[250px] px-1 py-1">
                      <ul className="bg-white pb-2 mt-4 transition-all ease-in-out text-black w-full shadow-lg border-t-2 border-primary">
                        {subMenuData?.map((subItem, index) => (
                          <Link
                            key={index}
                            href={
                              subItem.slug === "poly-clinic"
                                ? `/doctor`
                                : `/category/${subItem?.slug}`
                            }
                            onClick={() => setShowCatMenu(false)}
                          >
                            <li
                              className={`h-12 flex justify-between hover:px-5 items-center  text-lg  px-3 hover:text-primary rounded-md transition-all ease-in-out`}
                            >
                              {subItem?.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : 
                
              (
                <li
                  className={`relative uppercase ${item.name === "About Us" && "-mb-1"} cursor-pointer text-[14px] transition-all ease-in-out border-b-1 ${
                    isActive
                      ? "text-primary border-primary"
                      : "border-transparent hover:text-primary group"
                  } pb-1`}
                >
                  <Link href={item?.url}>{item.name}</Link>
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] bg-primary transition-all ease-in-out duration-500 transform -translate-x-1/2 ${
                      isActive
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
