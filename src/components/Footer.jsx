import React from "react";
import { Image, Link } from "@nextui-org/react";
import Logo from "../assets/img/logo.jpg";
import { menuItems } from "../Utils";

function Footer() {
  return (
    <footer className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
      <div className="flex flex-col items-center gap-8">
        <Image
          src={Logo}
          alt="Dört Yol Otel"
          className="object-scale w-full h-auto max-w-[500px]"
        />

        <div className="flex flex-wrap items-center mb-6 sm:mb-0">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="hover:underline me-4 md:me-6 text-inherit font-medium text-sm text-gray-500"
              href={`#${item.url}`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-autolg:my-8" />
      <span className="flex gap-1 justify-center text-sm text-gray-500 sm:text-center">
        © 2024
        <Link
          className="underline font-medium text-sm text-gray-500"
          target="_blank"
          href="https://www.linkedin.com/in/yasinakbulut/"
        >
          Yasin Akbulut
        </Link>
        Tarafından Geliştirildi.
      </span>
    </footer>
  );
}

export default Footer;
