import React from "react";

function BoxCreator({ count, titleOne, titleTwo }) {
  return (
    <div
      className=" flex lg:block flex-col items-center text-primary text-[40px] lg:text-[50px] rounded-[5px] pt-[15px] pb-5 
     lg:pt-5 lg:pb-6 lg:pr-[30px] lg:pl-[40px] h-[133px] md:h-full w-full lg:w-[267px] border border-primaryGray"
    >
      <div className="flex items-start">
        <span>{count}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mt-4 size-7"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex justify-center font-medium text-white font-OpenSansRegular text-fs">
        <div className="flex flex-col ml-1">
          <div className="relative ">
            {titleOne}
            <span className="absolute hidden sm:inline-block w-[30px] h-[1px] -left-12 bg-[#777777] top-1/2 "></span>
          </div>
          <span>{titleTwo}</span>
        </div>
      </div>
    </div>
  );
}

export default BoxCreator;
