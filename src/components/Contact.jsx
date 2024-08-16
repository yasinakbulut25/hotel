import React from "react";
import Title from "./Title";
import { EmailIcon, Hotel, PhoneIcon } from "../assets/icons";

function Contact() {
  return (
    <section id="adres" className="relative flex flex-col gap-8">
      <div className="bg-gradient"></div>
      <Title title="Bize Ulaşın" subTitle="ADRES" />
      <div className="flex lg:flex-row flex-col gap-4 items-center">
        <div className="flex flex-col gap-12 mb-12 min-w-max max-w-[570px] lg:mb-0 mx-auto">
          <div className="flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-warning/5 text-warning sm:h-[70px] sm:max-w-[70px]">
              <Hotel />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                Konumumuz
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                Yeşilırmak, Yeni Samsun Caddesi, 55580 Çarşamba/Samsun
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-warning/5 text-warning sm:h-[70px] sm:max-w-[70px]">
              <PhoneIcon />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                Telefon Numaramız
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                (+62)81 414 257 9980
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-warning/5 text-warning sm:h-[70px] sm:max-w-[70px]">
              <EmailIcon />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                Mail Adresimiz
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                info@yourdomain.com
              </p>
            </div>
          </div>
        </div>
        <iframe
          className="max-w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.797188334782!2d36.71890787639429!3d41.20439500732541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408808aacf08b0d1%3A0x8963ff6c7f05c0ca!2sD%C3%B6rtyol%20Otel!5e0!3m2!1sen!2str!4v1723667633261!5m2!1sen!2str"
          width={800}
          height={350}
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
