import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ProgressBar({ count, caption }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 font-OpenSansRegular">
      <div className="size-[120px]">
        <CircularProgressbar
          strokeWidth={7}
          styles={{
            path: { stroke: `rgb(255, 180, 0, ${count / 100})` },
            trail: { stroke: "#252525" },
            text: { fill: "#fff", textSize: 15 },
          }}
          value={count}
          // text={`${count}%`}
        />
      </div>
      <span className="text-base">{caption}</span>
    </div>
  );
}

export default ProgressBar;
