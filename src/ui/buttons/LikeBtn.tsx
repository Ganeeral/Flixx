import React from "react";
import { LikeWhiteIcon, DislikeIcon} from "../icons";

const LikeBtn = () => {
  return (
      <button className="flex items-center gradientBtn rounded-lg min-w-[137px] max-h-[40px]">
        <div className="likeHover duration bg-inherit pl-[14px] pr-[8px] py-[11.5px] flex items-center justify-center gap-x-3">
          <LikeWhiteIcon />
          <span className="text-white text-xs">66 тыс.</span>
        </div>
        <div className="gradientStick h-[23px] w-[1px] rounded-sm" />
        <div className="disHover duration pr-[14px] pl-[8px] py-[11.5px] flex items-center justify-center">
          <DislikeIcon />
        </div>
      </button>
  );
};

export default LikeBtn;
