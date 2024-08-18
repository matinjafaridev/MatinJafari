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
              project={"Memory Game"}
              language={"English"}
              client={"WebSite"}
              cover={"/memory-game-2.png"}
              preview={"memory-game-app"}
              link={"https://memory-game-kappa-six.vercel.app/"}
              title={"Memory Game project"}
              bg={"/memory-game.png"}
            />
          </div>

          <div className="w-full 2xs:w-auto">
            <ResumeItem
              project={"Bilito"}
              language={"Persian"}
              client={"WebSite"}
              cover={"/bilito2.png"}
              preview={"bilito-app"}
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
              cover={"/bilito2.png"}
              preview={"bilito-app"}
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
