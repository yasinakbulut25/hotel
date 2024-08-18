import React from "react";
import Title from "./Title";

function About() {
  return (
    <section id="hakkimizda" className="relative flex flex-col gap-8">
      <Title title="Hakkımızda" subTitle="HİKAYEMİZ" />
      <p className="max-w-[920px] mx-auto text-balance text-center">
        2017 yılından bu yana otelimiz, konuklarımıza huzur dolu ve konforlu bir
        konaklama sunma misyonuyla hizmet vermektedir. Misafirlerimize en yüksek
        kalitede hizmet sunarak, onlara evlerindeymiş gibi hissettirmek birinci
        önceliğimizdir. Siz değerli konuklarımızın her türlü ihtiyacını
        karşılamak için titizlikle çalışmaktayız. Tek ve çift kişilik
        odalarımızda sizleri ağırlamaktan onur duyarız.
      </p>
    </section>
  );
}

export default About;
