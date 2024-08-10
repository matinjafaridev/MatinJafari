import React, { useEffect } from "react";
import Title from "../Title";
import ResumeItem from "./ResumeItem";

function Portfolio({ whichPage }) {
  return (
    whichPage == "portfolio" && (
      <div className="container flex flex-col items-start w-full text-white sm:items-center">
        <Title
          backTitle={"WORKS"}
          wordOneTitle={"MY"}
          wordTwoTitle={"PORTFOLIO"}
        />
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          className="flex flex-wrap items-center justify-center w-full gap-6 2xs:gap-8"
        >
          <div className="w-full 2xs:w-auto">
            <ResumeItem
              project={"Bilito"}
              language={"Persian"}
              client={"WebSite"}
              video={"/video.mp4"}
              preview={"https://for.liara.run"}
              link={"https://for.liara.run/"}
              title={"Bilito project"}
              bg={"/bilito.png"}
            />
          </div>
          <div className="w-full 2xs:w-auto">
            <ResumeItem
              project={"Bilito"}
              language={"Persian"}
              client={"WebSite"}
              video={"/video.mp4"}
              preview={"https://for.liara.run"}
              link={"https://for.liara.run/"}
              title={"Bilito project"}
              bg={"/bilito.png"}
            />
          </div>
          <div className="w-full 2xs:w-auto">
            <ResumeItem
              project={"Bilito"}
              language={"Persian"}
              client={"WebSite"}
              video={"/video.mp4"}
              preview={"https://for.liara.run"}
              link={"https://for.liara.run/"}
              title={"Bilito project"}
              bg={"/bilito.png"}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Portfolio;
