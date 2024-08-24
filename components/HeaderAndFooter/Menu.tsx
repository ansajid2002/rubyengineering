import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTriangleDown } from "react-icons/go";

const Menu = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData,
  categoriesData, // This should contain your 8 categories, each with 5 subcategories
}) => {
  const path = usePathname();

  const menuItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about-us" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Products", url: "/products" },
    { id: 5, name: "Contact Us", url: "/contact-us" },
  ];

  return (
    <ul className="hidden lg:flex items-center gap-8 z-20 text-black">
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
                  <div className="absolute capitalize  top-0 mt-5 left-2 min-w-[800px] bg-white px-2 py-4 shadow-lg border-t-2 border-primary grid grid-cols-2 md:grid-cols-4 gap-4">
                    {subMenuData?.slice(0,8)?.map((category, index) => (
                      <div key={index} className="flex  flex-col">
                        <Link
                          href={`/category/${category.slug}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <h3 className="text-base  font-semibold text-black hover:text-primary mb-2">
                            {category.parent_name}
                          </h3>
                        </Link>
                        <ul>
                          {category.subcategories?.slice(0,4)?.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={`/category/${subItem.slug}`}
                                onClick={() => setShowCatMenu(false)}
                              >
                                <p className="text-sm flex items-center  gap-x-2 text-gray-600 hover:text-primary mb-1 transition-all ease-in-out">
                                  <ArrowRight size={14}/> {subItem.name}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
