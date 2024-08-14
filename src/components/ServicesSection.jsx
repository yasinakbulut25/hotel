import { Image } from "@nextui-org/react";
import { Services } from "../Utils";
import Title from "./Title";

function ServicesSection() {
  return (
    <section className="flex flex-col gap-8">
      <Title title="Neler Sunuyoruz?" subTitle="HİZMETLERİMİZ" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
        {Services.map((item, index) => (
          <Image
            key={index}
            className="aspect-video"
            alt={item.desc}
            src={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
