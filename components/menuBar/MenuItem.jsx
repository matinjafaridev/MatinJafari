import React, { useState } from "react";

function MenuItem({
  title,
  svg,
  setWhichPage,
  whichPage,
  count,
  isMobile,
  setChangePageEfect,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        setChangePageEfect(true);
        setWhichPage(title);
      }}
      style={{ paddingLeft: !isMobile && isHover && count }}
      className={`relative group flex flex-row-reverse items-center justify-center  
        text-white transition-all duration-300 rounded-full cursor-pointer group hover:bg-primary ${
          isMobile ? " bg-[#444] size-[45px]" : "bg-gray p-[15px]"
        }  ${whichPage == title && "bg-primary"}`}
    >
      {svg}
      <span
        className={`${
          isMobile && "hidden"
        } absolute invisible rounded-l-[35px] transition-all duration-300 
      opacity-0 group-hover:opacity-100 group-hover:visible group-hover:right-12 -right-3`}
      >
        {title.toUpperCase()}
      </span>
    </li>
  );
}

export default MenuItem;
