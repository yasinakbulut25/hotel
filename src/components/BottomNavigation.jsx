import React, { useState } from "react";
import { menuItems } from "../Utils";
import { Link } from "@nextui-org/react";

function BottomNavigation() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      style={{ zIndex: 9999999 }}
      className="fixed w-full h-20 px-2 pb-3 -translate-x-1/2 bottom-0 left-1/2"
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
