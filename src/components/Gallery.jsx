import { Image } from "@nextui-org/react";
import Title from "./Title";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { HotelImages } from "../Utils";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Gallery() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const handleClickImage = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };

  return (
    <section className="flex flex-col gap-8">
      <Title title="Foto Galeri" subTitle="OTELİMİZ" />
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={HotelImages}
        slide={lightboxController.slide}
      />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 768: 3, 1024: 4, 1280: 5 }}
      >
        <Masonry gutter="16px">
          {HotelImages.map((item, index) => (
            <Image
              onClick={() => handleClickImage(index + 1)}
              className="w-full max-h-[400px] cursor-pointer"
              key={index}
              alt="Dört Yol Otel Galeri"
              src={item}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}

export default Gallery;
