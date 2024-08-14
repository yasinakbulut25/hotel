import React from "react";
import Title from "./Title";

function About() {
  return (
    <section className="relative flex flex-col gap-8">
      <Title title="Hakkımızda" subTitle="HİKAYEMİZ" />
      <p className="max-w-[920px] mx-auto text-pretty text-center">
        2010 yılından bu yana, otelimiz konuklarımıza huzur dolu bir konaklama
        sunmak amacıyla hizmet vermektedir. Amacımız, misafirlerimize en yüksek
        kalitede hizmet sunarak, onları evlerinde hissettirmektir. Şehrin
        kalbinde, huzur dolu bir köşede yer alan otelimiz, merkezi konumuyla
        dikkat çekiyor. Çevredeki turistik yerlere kolayca ulaşabilirsiniz
      </p>
    </section>
  );
}

export default About;
