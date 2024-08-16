import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react";
import Logo from "../assets/img/logo2.png";
import { menuItems } from "../Utils";

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
    <Navbar
      className={`fixed duration-300 shadow ${
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
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image className="w-14 h-14" alt="" src={Logo} />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-inherit"
              href={`#${item.url}`}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
