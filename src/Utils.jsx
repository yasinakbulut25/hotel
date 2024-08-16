import * as ServicesImages from "./assets/img/services";
import * as HotelImages from "./assets/img";

export const Services = [
  {
    image: ServicesImages.TemizlikPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
  {
    image: ServicesImages.KahvaltitPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
  {
    image: ServicesImages.OtoparkPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
  {
    image: ServicesImages.WifiPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
  {
    image: ServicesImages.KlimaPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
  {
    image: ServicesImages.TvPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
  {
    image: ServicesImages.HizmetPng,
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero mollitia velit?",
  },
];

export const allHotelImages = Object.values(HotelImages).sort(
  (imageA, imageB) => imageA.localeCompare(imageB)
);

export const menuItems = [
  {
    text: "Hakkımızda",
    url: "hakkimizda",
  },
  {
    text: "Hizmetlerimiz",
    url: "hizmetlerimiz",
  },
  {
    text: "Foto Galeri",
    url: "galeri",
  },
  {
    text: "Adres",
    url: "adres",
  },
  {
    text: "İletişim",
    url: "iletisim",
  },
];