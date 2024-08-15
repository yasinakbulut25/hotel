import React from "react";
import Logo from "../assets/img/logo.jpg";
import { Image } from "@nextui-org/react";

function ComingSoon() {
  return (
    <section className="w-full h-dvh bg-slate-200 flex flex-col gap-20 justify-center items-center">
      <Image
        src={Logo}
        alt="Dört Yol Otel"
        className="object-scale w-full h-auto max-w-[800px]"
      />
      <h2 className="text-center text-slate-800 lg:text-6xl md:text-5xl text-4xl font-bold">
        Yakında Buradayız!
      </h2>
    </section>
  );
}

export default ComingSoon;
