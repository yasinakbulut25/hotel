import React from "react";

function Title({ title, subTitle }) {
  return (
    <div className="flex flex-col gap-3 w-full text-center">
      <p className="text-sm text-yellow-500 font-medium tracking-[.5rem]">
        {subTitle}
      </p>
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">
        {title}
      </h2>
    </div>
  );
}

export default Title;
