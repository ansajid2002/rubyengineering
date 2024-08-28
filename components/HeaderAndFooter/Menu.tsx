import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const Menu = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData,
  categoriesData, // This should contain your 8 categories, each with 5 subcategories
}) => {
  const path = usePathname();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const menuItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about-us" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Products", url: "/products" },
    { id: 5, name: "Contact Us", url: "/contact-us" },
  ];
  
  

  return (
    <ul className="hidden md:flex items-center gap-8 z-20 text-black">
      {menuItems.map((item) => {
        const isActive = path === item.url;

        return (
          <div key={item.id}>
            {item.subMenu ? (
              <li
                className="cursor-pointer  duration-700 uppercase text-[14px] flex items-center group gap-x-0.5 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <GoTriangleDown
                  size={18}
                  className="transition-all ease-in-out duration-500 group-hover:-rotate-180"
                />

{showCatMenu && (
        <div className={` ${hoveredCategory?.parent_name ? "min-w-[600px]" : "min-w-[300px]"} absolute top-0 mt-5 left-2  bg-white px-2 py-4 shadow-lg border-t-2 border-primary flex`}>
          
          {/* Left Side - Categories */}
          <div  style={{
    scrollbarWidth: 'thin', /* For Firefox */
    scrollbarColor: '#888 #f1f1f1', /* For Firefox: thumb color, track color */
  }} className={`  ${hoveredCategory?.parent_name ? "w-1/2  "  : "w-full"}  h-[70vh] overflow-y-scroll   pr-4`}>
            {subMenuData?.map((category, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCategory(category)}
                // onMouseLeave={() => setHoveredCategory(null)}
                className="capitalize mb-4"
              >
                <Link className="flex items-center gap-2"
                  href={`/subcategories/${category.parent_slug}`}
                  onClick={() => setShowCatMenu(false)}
                >
                  <img
                src={category.parent_meta.product_type_image[0]}
                alt={category.name}
                className=" h-8 w-8 object-cover"
              />
                  <div
      className={`text-base  font-[400] text-black hover:text-primary ${hoveredCategory?.parent_slug === category.parent_slug &&  "border-b-2 border-[#00008b] text-primary" } `}
      dangerouslySetInnerHTML={{ __html: category.parent_name }}
    ></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side - Subcategories */}
          <div className={ `${hoveredCategory?.parent_name ? "w-1/2 pl-4 border-l" : "" }  `}>
            {hoveredCategory && (
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">{hoveredCategory.parent_name}</h4>
                <ul>
                  {hoveredCategory.subcategories?.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <Link
                        href={`/products/${subItem.slug}`}
                        onClick={() => setShowCatMenu(false)}
                      >
                        <p className="text-sm flex items-center hover:ml-2 duration-200 gap-x-2 text-gray-600 hover:text-primary transition-all ease-in-out">
                          <ArrowRight color="gray" size={18}/> {subItem.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
              </li>
            ) : (
              <li
                className={`relative uppercase cursor-pointer text-[14px] transition-all ease-in-out border-b-1 ${
                  isActive
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-primary group"
                } pb-1`}
              >
                <Link href={item.url}>{item.name}</Link>
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] bg-primary transition-all ease-in-out duration-500 transform -translate-x-1/2 ${
                    isActive
                      ? "w-full -translate-x-1/2"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
