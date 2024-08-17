import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import { siteMenu } from "../../common/config/site";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex text-gray-500 items-center h-[80px] space-x-[32px]">
      {siteMenu.map((menuItem, index) => (
        <Link key={index} className="hover:text-[#CA5C3B]" to={menuItem.link}>
          {menuItem.title}
        </Link>
      ))}
      <div className="relative flex flex-col">
        <div
          className="flex items-center space-x-1 cursor-pointer hover:text-[#CA5C3B]"
          onClick={toggleDropdown}
        >
          <span>More</span>
          <BsChevronDown
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "transform rotate-180" : "transform rotate-0"
            }`}
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 w-[150px] cursor-pointer bg-pink-200 shadow-lg rounded-md">
            <ul className="flex flex-col p-2 space-y-1">
              <li className="hover:bg-[#CA5C3B50] px-2 py-1 rounded">item1</li>
              <li className="hover:bg-[#CA5C3B50] px-2 py-1 rounded">item2</li>
              <li className="hover:bg-[#CA5C3B50] px-2 py-1 rounded">item3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
