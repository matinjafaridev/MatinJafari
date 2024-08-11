"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "@/components/about/About";
import Contact from "@/components/contactUs/Contact";
import MainPage from "@/components/MainPageComponent/MainPage";
import MenuBar from "@/components/menuBar/MenuBar";
import MenuItem from "@/components/menuBar/MenuItem";
import Portfolio from "@/components/portfolio/Portfolio";
import { useEffect, useState } from "react";

const menuItems = [
  {
    id: 1,
    title: "home",
    pCount: 80,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="z-10 size-5"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "about",
    pCount: 90,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "portfolio",
    pCount: 120,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "contact",
    pCount: 110,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
      >
        <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
        <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [whichPage, setWhichPage] = useState("");
  const [changePageEfect, setChangePageEfect] = useState(false);

  useEffect(() => {
    if (!whichPage) {
      setWhichPage("home");
      setChangePageEfect(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [whichPage]);

  // window.addEventListener("mouseleave", () => {
  //   alert("leave");
  // });

  if (changePageEfect) {
    setTimeout(() => {
      setChangePageEfect(false);
    }, 500);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  const [goX, setGox] = useState(0);
  const [goY, setGoY] = useState(0);

  const [getHidden, setGetHidden] = useState(false);

  return (
    <>
      <div
        onMouseLeave={() => {
          setGetHidden(true);
        }}
        onMouseEnter={() => {
          setGetHidden(false);
        }}
        onMouseMove={(event) => {
          setGoY(event.clientY);
          setGox(event.clientX);
        }}
        className="relative "
      >
        <div
          className={`${
            changePageEfect
              ? "translate-y-[100%] z-[99999] duration-[500ms] transition-transform z ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              : " opacity-0 z-0"
          } fixed w-full h-full bg-primaryGray`}
        ></div>

        {/* Main Page */}
        <div
          className={`${
            whichPage == "home" ? " flex" : "hidden"
          }  absolute  w-full duration-1000  transition-transform
         ease-[cubic-bezier(.77,0,.175,1)] overflow-hidden bg-[#121212]  items-center
         justify-between h-screen text-fs`}
        >
          <div className="fixed right-12 top-[30%] hidden lg:block">
            <MenuBar
              menuItems={menuItems}
              setChangePageEfect={setChangePageEfect}
              changePageEfect={changePageEfect}
              setWhichPage={setWhichPage}
              whichPage={whichPage}
            />
          </div>

          <MainPage whichPage={whichPage} />
        </div>
        {/* Main Page */}

        {/* About Page */}
        <div
          className={`${
            whichPage == "about" ? " flex" : " hidden"
          }  absolute w-full duration-1000 transition-transform ease-[cubic-bezier(.77,0,.175,1)]
           overflow-hidden pt-[50px] pb-[150px] md:py-[150px] bg-[#121212] flex items-center
            justify-between text-fs`}
        >
          <div className="fixed z-[6000] right-12 top-[30%] hidden lg:block">
            <MenuBar
              menuItems={menuItems}
              setChangePageEfect={setChangePageEfect}
              changePageEfect={changePageEfect}
              setWhichPage={setWhichPage}
              whichPage={whichPage}
            />
          </div>
          <About whichPage={whichPage} />
        </div>
        {/* About Page */}

        {/* PortFolio Page */}
        <div
          className={`${
            whichPage == "portfolio" ? " flex" : " hidden"
          }  absolute w-full duration-1000 transition-transform ease-[cubic-bezier(.77,0,.175,1)]
         overflow-hidden pt-[50px] pb-[150px] md:py-[150px] bg-[#121212] justify-center text-fs min-h-screen`}
        >
          <div className="fixed z-10 right-12 top-[30%] hidden lg:block">
            <MenuBar
              menuItems={menuItems}
              setChangePageEfect={setChangePageEfect}
              changePageEfect={changePageEfect}
              setWhichPage={setWhichPage}
              whichPage={whichPage}
            />
          </div>

          <Portfolio whichPage={whichPage} />
        </div>
        {/* PortFolio Page */}

        {/* COntact us page */}
        <div
          className={`${
            whichPage == "contact" ? " flex" : " hidden"
          }  absolute w-full  duration-1000 transition-transform ease-[cubic-bezier(.77,0,.175,1)]
         overflow-hidden pt-[50px] pb-[150px] md:py-[150px] bg-[#121212] justify-center text-fs min-h-screen`}
        >
          <div className="fixed right-12 top-[30%] hidden lg:block">
            <MenuBar
              menuItems={menuItems}
              setChangePageEfect={setChangePageEfect}
              changePageEfect={changePageEfect}
              setWhichPage={setWhichPage}
              whichPage={whichPage}
            />
          </div>

          <Contact whichPage={whichPage} />
        </div>
        {/* COntact us page */}

        <div className=" fixed flex lg:hidden justify-between items-center px-8 sm:px-14 md:px-20 bg-gray z-50 w-full bottom-0 h-[60px]">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              setChangePageEfect={setChangePageEfect}
              title={item.title}
              svg={item.svg}
              count={item.pCount}
              isMobile={true}
              setWhichPage={setWhichPage}
              whichPage={whichPage}
            />
          ))}
        </div>

        {/* custom-cursor */}
        <div
          style={{ top: goY - 17 + "px", left: goX - 17 + "px" }}
          className={` hidden ${
            !getHidden ? "md:flex" : " md:hidden"
          }  fixed z-[9999999]  items-center justify-center transition-all 
          duration-100 ease-linear rounded-full pointer-events-none size-10 bg-primary/30`}
        ></div>
        <span
          style={{ top: goY - 17 + "px", left: goX - 17 + "px" }}
          className={` hidden ${
            !getHidden ? "md:inline-block" : " md:hidden"
          }  pointer-events-none fixed transition duration-300 z-[9999999]
           translate-x-4 translate-y-4 bg-primary rounded-full size-[8px]`}
        ></span>
        {/* custom-cursor */}
      </div>
    </>
  );
}
