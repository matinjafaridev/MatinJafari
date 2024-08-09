import React, { useState } from "react";

function ResumeItem({
  title,
  bg,
  project,
  language,
  client,
  preview,
  link,
  video,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        style={{
          backgroundImage: `url('${bg}')`,
        }}
        className="shadow-2xl overflow-hidden cursor-pointer bg-center bg-cover bg-no-repeat w-full 2xs:w-[372px] h-[229px] 
            transition-all relative duration-500 group rounded-[5px]"
      >
        <div className="absolute left-0 right-0 flex items-center justify-center w-full h-full text-xl transition-all duration-500 opacity-0 group-hover:bg-primary group-hover:opacity-100">
          <span className="transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            {title}
          </span>
        </div>
      </div>
      {/* modal */}
      <div
        className={`${
          showModal ? " opacity-100 z-50" : " opacity-0 -z-50"
        } fixed inset-0 flex items-center justify-center backdrop-blur-sm`}
      >
        <div
          className={`${
            showModal ? " scale-100" : "scale-0"
          }  bg-gray relative transition-all font-OpenSansRegular duration-300 rounded-[15px]
           py-3 px-3 md:py-12 md:px-6 w-[80%] md:max-w-[680px]`}
        >
          <div>
            <h6 className=" text-primary mb-6 md:mb-12 text-[22px] md:text-[33px] font-PoppinsRegular text-center">
              {title}
            </h6>
            <div>
              <div className="flex flex-col justify-between w-full text-xs md:gap-y-0 gap-y-4 md:flex-row 2xs:text-fs">
                <div className="flex-col hidden gap-4 md:flex ">
                  <div className="flex items-start gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    <span>
                      Project : <b>{project}</b>
                    </span>
                  </div>
                  <div className="flex items-start gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                      />
                    </svg>

                    <span>
                      Language : <b>{language}</b>
                    </span>
                  </div>
                </div>
                <div className="flex-col hidden gap-4 md:flex ">
                  <div className="flex items-start gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>

                    <span>
                      Client : <b>{client}</b>
                    </span>
                  </div>
                  <div className="flex items-start gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>

                    <span>
                      Preview :{" "}
                      <b>
                        <a target="blanck" href={link}>
                          {preview}
                        </a>
                      </b>
                    </span>
                  </div>
                </div>

                {/* mobile */}
                <div className="flex items-end md:hidden md:items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                  <span>
                    Project : <b>{project}</b>
                  </span>
                </div>
                <div className="flex items-end md:hidden md:items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                    />
                  </svg>

                  <span>
                    Language : <b>{language}</b>
                  </span>
                </div>
                <div className="flex items-end md:hidden md:items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>

                  <span>
                    Client : <b>{client}</b>
                  </span>
                </div>
                <div className="flex items-end md:hidden md:items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>

                  <span>
                    Preview :{" "}
                    <b>
                      <a target="blanck" href={link}>
                        {preview}
                      </a>
                    </b>
                  </span>
                </div>
                {/* mobile */}
              </div>
            </div>
          </div>
          <video className="max-w-full mt-6 md:mt-12 rounded-[10px]" controls>
            <source
              src={
                "https://s8.uupload.ir/filelink/IPspZxBHYK70_e80f38deac/video_xnwk.mp4"
              }
              type="video/mp4"
            ></source>
          </video>
          <span
            onClick={() => {
              setShowModal(false);
            }}
            className="flex justify-center items-center absolute right-0 sm:-right-16 top-[-30px] sm:-top-4
           cursor-pointer size-[25px] sm:size-[50px] rounded-full border-2 sm:border-[4px] border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:size-6 size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* modal */}
    </>
  );
}

export default ResumeItem;
