import React from "react";
import Title from "../Title";

function Contact({ whichPage }) {
  return (
    whichPage == "contact" && (
      <div className="container flex flex-col items-start text-white md:items-center">
        <Title
          backTitle={"CONTACT"}
          wordOneTitle={"GET IN"}
          wordTwoTitle={"TOUCH"}
        />
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          className="flex flex-col justify-between lg:flex-row gap-y-10 xl:gap-x-10"
        >
          {/* Left */}
          <div className="">
            <div className="flex flex-col justify-between w-full h-full font-OpenSansRegular text-fs">
              <h6 className="font-bold font-PoppinsRegular mb-6 text-[26px]">
                DONT'T BE SHY !
              </h6>
              <p className=" leading-[25px] max-w-[360px]">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="my-[20px] space-y-[20px]">
                <div className="flex items-center gap-x-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10"
                  >
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="flex flex-col items-start ">
                    <span className=" text-white/50">Address Point</span>
                    <span className="text-white ">Iran, isfahan</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10"
                  >
                    <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                    <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                  </svg>

                  <div className="flex flex-col items-start ">
                    <span className=" text-white/50">MAIL ME</span>
                    <span className="text-white ">
                      matinjafaridev@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10"
                  >
                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                    <path
                      fillRule="evenodd"
                      d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="flex flex-col items-start ">
                    <span className=" text-white/50">CALL ME</span>
                    <span className="text-white ">+98 901 313 77 57</span>
                  </div>
                </div>
              </div>
              <div className="flex text-white gap-x-3">
                <a
                  href="https://t.me/JafarimAtin"
                  target="blanck"
                  className="flex items-center justify-center rounded-full size-10 bg-gray"
                >
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 48 48"
                  >
                    <path d="M5.83 23.616c12.568-5.529 28.832-12.27 31.077-13.203 5.889-2.442 7.696-1.974 6.795 3.434-.647 3.887-2.514 16.756-4.002 24.766-.883 4.75-2.864 5.313-5.979 3.258-1.498-.989-9.059-5.989-10.7-7.163-1.498-1.07-3.564-2.357-.973-4.892.922-.903 6.966-6.674 11.675-11.166.617-.59-.158-1.559-.87-1.086-6.347 4.209-15.147 10.051-16.267 10.812-1.692 1.149-3.317 1.676-6.234.838-2.204-.633-4.357-1.388-5.195-1.676-3.227-1.108-2.461-2.543.673-3.922z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fmatinjafaridev%2F%3Figsh%3DMWw1ZTNwa3A4ZXFvcA%253D%253D&is_from_rle"
                  target="blanck"
                  className="flex items-center justify-center rounded-full size-10 bg-gray"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 50 50"
                  >
                    <path d="M16 3C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13H16zm21 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-12 3c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11zm0 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/matin-jafari-b382762a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blanck"
                  className="flex items-center justify-center rounded-full size-10 bg-gray"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 32 32"
                  >
                    <path d="M8.643 4A2.641 2.641 0 006 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 008.643 4zm12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768 2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11zm-15.172.31V26h4.56V11.31h-4.56z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  target="blanck"
                  className="flex items-center justify-center rounded-full size-10 bg-gray"
                >
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.6 0 0 3.6 0 8c0 3.526 2.315 6.534 5.498 7.591.377.055.52-.179.52-.385 0-.19-.007-.693-.011-1.361-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.888-1.17-.888-1.17-.726-.496.055-.486.055-.486.803.057 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.073-.517.279-.87.508-1.069-1.776-.202-3.644-.888-3.644-3.954 0-.873.312-1.587.823-2.147-.082-.203-.357-1.017.079-2.118 0 0 .672-.215 2.2.82A7.672 7.672 0 018 3.869a7.691 7.691 0 012.003.269c1.527-1.035 2.198-.82 2.198-.82.436 1.101.162 1.915.08 2.117.513.559.822 1.273.822 2.147 0 3.073-1.87 3.75-3.653 3.948.287.247.543.735.543 1.482 0 1.07-.01 1.932-.01 2.195 0 .208.141.443.521.385C13.686 14.532 16 11.526 16 8c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Left */}

          {/* Right */}
          <form action="#" className="space-y-8 ">
            <div className="flex flex-col items-center space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-row">
              <input
                placeholder="YOUR NAME"
                className="focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full lg:w-[352px] placeholder:text-white/25 rounded-[30px] py-3 px-7 bg-primaryGray"
                type="text"
              />
              <input
                placeholder="YOUR EMAIL"
                className="focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full lg:w-[352px] placeholder:text-white/25 rounded-[30px] py-3 px-7 bg-primaryGray"
                type="text"
              />
            </div>
            <input
              placeholder="YOUR SEBJECT"
              className=" w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-white/25 rounded-[30px] py-3 px-7 bg-primaryGray"
              type="text"
            />
            <textarea
              rows={7}
              placeholder="YOUR MESSAGE"
              className=" w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-white/25 rounded-[30px] py-3 px-7 bg-primaryGray"
              name=""
              id=""
            ></textarea>
            <button
              type="submit"
              className="border font-semibold z-[50] mt-8 transition-all duration-500 overflow-hidden
             group relative rounded-[35px] py-4 pr-[70px] pl-[35px] text-white border-primary"
            >
              <span className="h-[55px] right-0 top-0 absolute rounded-full bg-primary w-[55px] inline-flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#000"
                  version="1.1"
                  viewBox="0 0 495.003 495.003"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M164.711 456.687a8.007 8.007 0 004.266 7.072 7.992 7.992 0 008.245-.468l55.09-37.616-67.6-32.22v63.232z"></path>
                    <path d="M492.431 32.443a8.024 8.024 0 00-5.44-2.125 7.89 7.89 0 00-3.5.816L7.905 264.422a14.154 14.154 0 00.153 25.472L133.4 349.618l250.62-205.99-219.565 220.786 156.145 74.4a14.115 14.115 0 006.084 1.376c1.768 0 3.519-.322 5.186-.977a14.188 14.188 0 007.97-7.956l154.596-390a7.968 7.968 0 00-2.005-8.814z"></path>
                  </g>
                </svg>
              </span>
              <span>SEND MESSAGE</span>
              <span className="bg-primary rounded-r-[35px] transition-all duration-500 -z-[10] size-full top-0 group-hover:left-0 left-[100%] inline-block absolute"></span>
            </button>
          </form>
          {/* Right */}
        </section>
      </div>
    )
  );
}

export default Contact;
