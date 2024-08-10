import React from "react";

function Btn({ title, svg, moreAboutBtn }) {
  return (
    <button
      onClick={moreAboutBtn && moreAboutBtn}
      className="border font-semibold z-[50] lg:mt-8 transition-all duration-500 overflow-hidden
     group relative rounded-[35px] py-4 pr-[70px] pl-[35px] text-white border-primary"
    >
      <span className="h-[55px] right-0 top-0 absolute rounded-full bg-primary w-[55px] inline-flex justify-center items-center ">
        {svg}
      </span>
      <span>{title}</span>
      <span className="bg-primary rounded-r-[35px] transition-all duration-500 -z-[10] size-full top-0 group-hover:left-0 left-[100%] inline-block absolute"></span>
    </button>
  );
}

export default Btn;
