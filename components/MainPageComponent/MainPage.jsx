import Image from "next/image";
import React, { useEffect, useState } from "react";
import Btn from "../Btn";

function MainPage({ whichPage }) {
  return (
    whichPage == "home" && (
      <div className="flex justify-between w-full overflow-hidden ">
        <div className=" hidden lg:block bg-primary w-[1593px]  md:h-[150vh] fixed -left-[76rem] -rotate-[17deg]"></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="bg-black hidden lg:flex ml-12 z-10 justify-between shadow-current
           h-[calc(100vh-80px)] rounded-[30px] max-w-[400px] xl:max-w-[450px] xxl:max-w-[600px]"
        >
          <img alt="Picture of the author" src="/test.png" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="flex flex-col items-center justify-center m-auto text-center lg:ml-12 xxl:ml-auto lg:contain-none lg:text-left lg:block"
        >
          <div
            className=" size-[230px] md:size-[270px] flex lg:hidden mb-4 justify-end items-end 
          overflow-hidden rounded-full bg-black border-[4px] border-gray"
          >
            {" "}
            <Image
              width={300}
              height={900}
              alt="Picture of the author"
              src="/test3.png"
            ></Image>
          </div>
          <div className=" md:text-[38px] text-[28px] xl:text-[51px] font-bold lg:pl-[60px]">
            <div className="relative text-primary">
              <span className="absolute top-1/2 -left-[12%] hidden lg:inline-block w-10 h-1 rounded-lg bg-primary"></span>
              <span>I'm MATIN JAFARI.</span>
            </div>
            <span className="text-white">WEB DEVELOPER</span>
          </div>
          <p className="text-white px-4 sm:px-0 max-w-[550px] md:max-w-[450px] xl:max-w-[600px] mb-4 lg:mb-auto lg:mt-4 font-OpenSansRegular text-sm lg:text-fs leading-[30px] lg:leading-[35px]">
            I'm a Tunisian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <Btn
            title={"MORE ABOUT ME"}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
          />
        </div>
      </div>
    )
  );
}

export default MainPage;
