import React from "react";
import Title from "./Title";
import { EmailIcon, HotelIcon, PhoneIcon, MobileIcon } from "../assets/icons";

function Contact() {
  const content = [
    {
      icon: <HotelIcon />,
      title: "Konumumuz",
      desc: "Yeşilırmak Mahallesi, Yeni Samsun Caddesi, No: 40/1 Çarşamba/Samsun",
    },
    {
      icon: <PhoneIcon />,
      title: "Telefon Numaramız",
      desc: "0 (362) 832 37 37",
      link: "tel:03628323737",
    },
    {
      icon: <MobileIcon />,
      title: "Cep Numaramız",
      desc: "0 (544) 832 37 35",
      link: "tel:+905448323735",
    },
    {
      icon: <EmailIcon />,
      title: "Mail Adresimiz",
      desc: "info@yourdomain.com",
      link: "mailto:info@yourdomain.com",
    },
  ];
  return (
    <section id="adres" className="relative flex flex-col gap-8">
      <div className="bg-gradient"></div>
      <Title title="Bize Ulaşın" subTitle="ADRES" />
      <div className="flex lg:flex-row flex-col gap-4 items-center">
        <div className="flex flex-col gap-8 mb-12 min-w-max max-w-[570px] lg:mb-0 mx-auto">
          {content.map((item, index) => (
            <div key={index} className="flex w-full max-w-[370px] group z-10">
              <div className="group-hover:scale-110 duration-300 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-xl bg-white shadow text-warning sm:h-[70px] sm:max-w-[70px]">
                {item.icon}
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-semibold text-black">
                  {item.title}
                </h4>
                {item.link ? (
                  <a href={item.link}>{item.desc}</a>
                ) : (
                  <p className="text-base">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <iframe
          className="max-w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.797188334782!2d36.71890787639429!3d41.20439500732541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408808aacf08b0d1%3A0x8963ff6c7f05c0ca!2sD%C3%B6rtyol%20Otel!5e0!3m2!1sen!2str!4v1723667633261!5m2!1sen!2str"
          width={800}
          height={400}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Contact;
