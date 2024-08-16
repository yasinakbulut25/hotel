import { useEffect, useState } from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { menuItems } from "../Utils";
import BottomNavigation from "./BottomNavigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={`sm:block hidden fixed duration-300 shadow ${
          isScrolled
            ? "bg-slate-100 text-black"
            : "bg-transparent text-white shadow-transparent"
        }`}
        isMenuOpen={isMenuOpen}
        isBlurred={false}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[5px]",
            "data-[active=true]:after:rounded-[10px]",
            "data-[active=true]:after:bg-yellow-500",
            "data-[active=true]:font-normal",
          ],
        }}
      >
        <NavbarContent
          className="w-full hidden sm:flex gap-4 font-normal tracking-wide"
          justify="center"
        >
          {menuItems.map((item, index) => (
            <NavbarItem isActive={activeIndex === index} key={index}>
              <Link
                onClick={() => setActiveIndex(index)}
                className="text-inherit"
                href={`#${item.url}`}
              >
                {item.text}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
      <BottomNavigation
        isScrolled={isScrolled}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
}

export default Header;
