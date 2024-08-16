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
    mobileText: "Hakkımızda",
    url: "hakkimizda",
  },
  {
    text: "Foto Galeri",
    mobileText: "Galeri",
    url: "galeri",
  },
  {
    text: "Hizmetlerimiz",
    mobileText: "Hizmetler",
    url: "hizmetlerimiz",
  },
  {
    text: "Adres",
    mobileText: "Adres",
    url: "adres",
  },
  {
    text: "İletişim",
    mobileText: "İletişim",
    url: "iletisim",
  },
];
