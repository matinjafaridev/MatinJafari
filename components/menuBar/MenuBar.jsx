import React from "react";
import MenuItem from "./MenuItem";

function MenuBar({ setWhichPage, whichPage, setChangePageEfect, menuItems }) {
  return (
    <ul className=" space-y-[20px] flex flex-col items-end">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          setChangePageEfect={setChangePageEfect}
          title={item.title}
          svg={item.svg}
          count={item.pCount}
          setWhichPage={setWhichPage}
          whichPage={whichPage}
        />
      ))}
    </ul>
  );
}

export default MenuBar;
