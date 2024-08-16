import React, { useState } from "react";
import { menuItems } from "../Utils";
import { Link } from "@nextui-org/react";

function BottomNavigation({ activeIndex, setActiveIndex, isScrolled }) {
  return (
    <div
      style={{ zIndex: 9999999 }}
      className={`fixed w-full h-20 px-2 pb-3 -translate-x-1/2 left-1/2 duration-300 ${isScrolled ? 'bottom-0' : '-bottom-20'}`}
    >
      <div className="sm:hidden block h-full bg-white border border-gray-200 rounded-full shadow-lg">
        <div className="flex justify-evenly h-full">
          {menuItems.map((item, index) => (
            <Link
              onClick={() => setActiveIndex(index)}
              key={index}
              className={`flex items-center justify-center text-xs ${
                activeIndex === index ? "text-yellow-500" : "text-black"
              }`}
              href={`#${item.url}`}
            >
              {item.mobileText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
