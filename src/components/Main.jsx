import React from "react";
import { LocationIcon } from "../assets/icons";
import { Image } from "@nextui-org/react";
import RoomImage1 from "../assets/img/room-2.jpg";
import RoomImage2 from "../assets/img/room-4.jpg";
import RoomImage3 from "../assets/img/room-5.jpg";

function Main() {
  return (
    <div className="relative w-full py-20 h-dvh">
      <div className="bg-gradient"></div>
      <div className="md:container w-full mx-auto flex md:flex-row flex-col">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4">
            <span className="p-3 bg-blue-100 font-medium texts-white rounded-lg text-md flex gap-2 w-max">
              <LocationIcon width={16} />
              Samsun / Çarşamba
            </span>
            <h1 className="text-6xl font-extrabold leading-tight">
              DÖRT YOL OTEL'E <span className="block">HOŞGELDİNİZ!</span>
            </h1>
          </div>
        </div>
        <div className="w-full flex gap-4 items-center justify-center">
          <div className="flex flex-col gap-4">
            <Image
              className="object-cover"
              width={250}
              height={300}
              alt="Tek Kişilik Oda"
              src={RoomImage1}
            />
            <Image
              className="object-cover"
              width={250}
              height={300}
              alt="Tek Kişilik Oda"
              src={RoomImage2}
            />
          </div>
          <div className="flex h-full items-center">
            <Image
              className="object-cover"
              width={250}
              height={300}
              alt="Tek Kişilik Oda"
              src={RoomImage3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
