import { LocationIcon } from "../assets/icons";
import BackgroundImage from "../assets/img/otel-5.jpg";
import { Link } from "@nextui-org/react";
import ArrowGif from '../assets/arrow.gif';

function Main() {
  return (
    <div className="relative w-full py-20 h-screen mb-16 z-10">
      <img
        className="absolute top-0 left-0 w-full h-full brightness-[.3] object-cover z-0"
        src={BackgroundImage}
        style={{ zIndex: -1 }}
        alt="Dörtyol Otel'e Hoşgeldiniz!"
      />
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-5 z-1">
        <Link
          href="https://www.google.com/maps?ll=41.204391,36.721483&z=16&t=m&hl=en&gl=TR&mapclient=embed&cid=9900037247343116490"
          target="_blank"
          className="p-4 border bg-black bg-opacity-30 border-slate-100 text-white rounded-lg text-lg flex gap-2 w-max"
        >
          <LocationIcon width={16} />
          Samsun / Çarşamba
        </Link>
        <h1 className="main-title flex flex-col gap-4 tracking-wider lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold leading-tight text-yellow-500">
          DÖRTYOL OTEL'E
          <span className="stroke-text">HOŞGELDİNİZ!</span>
        </h1>
      </div>
      <a href="#hakkimizda" className="w-full absolute bottom-24 flex justify-center h-8 opacity-60">
        <img src={ArrowGif} alt="kaydır" />
      </a>
    </div>
  );
}

export default Main;
