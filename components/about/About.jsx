import React from "react";
import BoxCreator from "./BoxCreator";
import Btn from "../Btn";
import Title from "../Title";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

function About({ whichPage }) {
  return (
    whichPage == "about" && (
      <div className="container flex flex-col items-start justify-center w-full text-white sm:items-center">
        <Title
          backTitle={"RESUME"}
          wordOneTitle={"ABOUT"}
          wordTwoTitle={"ME"}
        />
        <div
          data-aos="zoom-out-down"
          data-aos-duration="2000"
          className="flex flex-col w-full lg:w-auto lg:flex-row items-center justify-center lg:gap-x-[200px]"
        >
          <div className="inline-flex flex-col w-full ">
            <span className=" text-xl lg:text-[26px] font-semibold ">
              PERSONAL INFOS
            </span>

            <div className="flex items-center justify-center mt-5 sm:hidden">
              <div className=" size-[230px] md:size-[270px] flex lg:hidden mb-4 justify-end items-end overflow-hidden rounded-full bg-black border-[4px] border-gray">
                <Image
                  width={300}
                  height={900}
                  alt="Picture of the author"
                  src="/test3.png"
                ></Image>
              </div>
            </div>

            <div className="flex items-center justify-between w-full mt-5 mb-10 text-xs 2xs:text-fs lg:mb-auto lg:gap-x-40 font-OpenSansRegular">
              <div className="flex flex-col gap-y-7">
                <div>
                  <span className="block mb-1 md:inline opacity-80">
                    First Name:{" "}
                  </span>
                  <span> Matin</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">Age: </span>
                  <span> 23</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Freelance:{" "}
                  </span>
                  <span className="text-[#5EB85B] font-semibold">
                    {" "}
                    Available
                  </span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Phone:{" "}
                  </span>
                  <span className="">09903331793</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Telegram:{" "}
                  </span>
                  <span className="">MatinJafariDev</span>
                </div>
              </div>

              <div className="flex flex-col gap-y-7">
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Last Name:{" "}
                  </span>
                  <span> Jafari</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Nationality:{" "}
                  </span>
                  <span> Persian</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Address:{" "}
                  </span>
                  <span> Iran</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    Email:{" "}
                  </span>
                  <span> MatinJafariDev@gmail.com</span>
                </div>
                <div>
                  <span className="block mb-1 opacity-80 md:inline">
                    langages:{" "}
                  </span>
                  <span>Persian</span>
                </div>
              </div>
            </div>
            <div>
              <Btn
                title={"DOWNLOAD CV"}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="flex md:gap-[30px] w-full lg:w-auto mt-12 lg:mt-auto justify-center items-center flex-wrap">
            <div className="lg:space-y-[30px] w-full lg:w-auto lg:block flex justify-between items-center gap-x-4">
              <BoxCreator
                count={12}
                titleOne={"YEARS OF"}
                titleTwo={"EXPERRIENCE"}
              />
              <BoxCreator count={3} titleOne={"RESUME"} titleTwo={"WEB APP"} />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000"
          className="flex w-full flex-wrap flex-col lg:w-[65%] mt-12 items-start lg:items-center justify-center"
        >
          <span className="text-xl lg:text-[26px] mb-12 font-medium">
            MY SKILLS
          </span>
          <div className="flex flex-col w-full gap-y-12">
            <div className="flex-wrap justify-between hidden w-full sm:flex">
              <ProgressBar count={55} caption={"JAVASCRIPT"} />
              <ProgressBar count={55} caption={"HTML"} />
              <ProgressBar count={55} caption={"CSS"} />
            </div>
            <div className="flex-wrap justify-between hidden w-full sm:flex">
              <ProgressBar count={55} caption={"REACT"} />
              <ProgressBar count={55} caption={"NEXT"} />
              <ProgressBar count={55} caption={"TAILWIND"} />
            </div>

            <div className="flex flex-wrap justify-between w-full gap-y-8 sm:hidden">
              <ProgressBar count={55} caption={"JAVASCRIPT"} />
              <ProgressBar count={55} caption={"HTML"} />
              <ProgressBar count={55} caption={"CSS"} />

              <ProgressBar count={55} caption={"REACT"} />
              <ProgressBar count={55} caption={"NEXT"} />
              <ProgressBar count={55} caption={"TAILWIND"} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default About;
