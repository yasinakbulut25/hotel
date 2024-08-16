import React from "react";
import Title from "./Title";

function Form() {
  const formID = "242266247829061";

  return (
    <section
      id="iletisim"
      className="relative flex flex-col gap-1 w-full px-4 rounded-3xl h-auto overflow-hidden"
    >
      <Title title="İletişime Geçebilirsiniz" subTitle="İLETİŞİM" />
      <iframe
        className="min-h-[670px]"
        id={`JotFormIFrame-${formID}`}
        title="Otel Form"
        onLoad={window.parent.scrollTo(0, 0)}
        allow="geolocation; microphone; camera; fullscreen"
        src={`https://form.jotform.com/${formID}`}
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          minHeight: '900px',
          height: "auto",
          border: "none",
        }}
      />
    </section>
  );
}

export default Form;
