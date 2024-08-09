import React from "react";

function Title({ backTitle, wordOneTitle, wordTwoTitle }) {
  return (
    <div className="relative flex items-center justify-center mb-20">
      <h1 className=" absolute tracking-[10px] top-1 -left-[17px] sm:left-auto sm:top-auto text-[#ffffff12] text-[45px] md:text-[111px] font-[900]">
        {backTitle}
      </h1>
      <span className=" text-[35px] sm:text-[55px] inline-block font-[900]">
        {wordOneTitle} <span className=" text-primary">{wordTwoTitle}</span>
      </span>
    </div>
  );
}

export default Title;
