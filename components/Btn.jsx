import React from "react";

function Btn({ title, svg, moreAboutBtn }) {
  return (
    <button
      onClick={moreAboutBtn && moreAboutBtn}
      className="border font-semibold z-[50] lg:mt-8 transition-all duration-500 overflow-hidden
     group relative rounded-[35px] py-4 pr-[70px] pl-[35px] text-white border-primary"
    >
      <span className="h-[55px] right-0 px-[27px] z-[10] group-hover:px-[100%] transition-all duration-700 top-0 absolute rounded-full bg-primary  inline-flex justify-center items-center ">
        <div className="absolute right-4">{svg}</div>
      </span>
      <span className=" relative z-[50]">{title}</span>
    </button>
  );
}

export default Btn;
