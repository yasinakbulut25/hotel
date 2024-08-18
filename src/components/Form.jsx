import React from "react";
import Title from "./Title";

function Form() {
  const formID = "242301686101041";

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
        frameborder="0"
        allowTransparency="true"
        onLoad={window.parent.scrollTo(0, 0)}
        allow="geolocation; microphone; camera; fullscreen"
        src={`https://form.jotform.com/${formID}`}
        scrolling="no"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          minHeight: "900px",
          height: "auto",
          border: "none",
        }}
      />
      <div className="absolute w-full bg-zinc-50 h-20 bottom-0"></div>
    </section>
  );
}

export default Form;
