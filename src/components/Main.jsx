import { LocationIcon } from "../assets/icons";
import BackgroundImage from "../assets/img/otel-5.jpg";

function Main() {
  return (
    <div className="relative w-full py-20 h-dvh mb-16 z-10">
      <img
        className="absolute top-0 left-0 w-full h-full brightness-[.3] object-cover z-0"
        src={BackgroundImage}
        style={{ zIndex: -1 }}
        alt="Dörtyol Otel'e Hoşgeldiniz!"
      />
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-5 z-1">
        <span className="p-4 border bg-black bg-opacity-30 border-slate-100 text-white rounded-lg text-lg flex gap-2 w-max">
          <LocationIcon width={16} />
          Samsun / Çarşamba
        </span>
        <h1 className="main-title flex flex-col gap-4 tracking-wider lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold leading-tight text-yellow-500">
          DÖRTYOL OTEL'E
          <span className="stroke-text">HOŞGELDİNİZ!</span>
        </h1>
      </div>
    </div>
  );
}

export default Main;
