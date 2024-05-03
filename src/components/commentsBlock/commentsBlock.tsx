import Image from "next/image";
import React, { useState } from "react";
import { Video } from "@/types/video";
import cn from "classnames";

interface ChannelInfoProps {
  video: Video | null;
}

const CommentsBlock: React.FC<ChannelInfoProps> = ({ video }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  if (!video) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-2">
      <form method="POST">
        <h5 className="leading-5 text-white tracking-[-0.03em]">1293 комментария</h5>
        <div className="flex gap-x-3 items-center mt-5">
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src={video.author_avatar}
              alt=""
              fill
              className="rounded-full object-center object-cover min-w-10"
            />
          </div>
          <div className="relative w-full">
            <input
              className="outline-none text-sideText w-full bg-inherit"
              type="text"
              placeholder="Введите комментарий"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            <div className={cn("input-nofocus")}></div>
            <div
              className={cn("input-line", {
                "input-focused": isInputFocused,
              })}
            ></div>
          </div>
        </div>
        <div
          className={cn("w-full flex justify-end", {
            "opacity-100 block": isInputFocused,
            "opacity-0 hidden": !isInputFocused,
            "transition-opacity duration-300": true,
          })}
        >
          <button type="submit" className="gradientBtn text-white px-4 py-2 rounded-lg">
            Отправить
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-3 items-center">
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src={video.author_avatar}
              alt=""
              fill
              className="rounded-full object-center object-cover min-w-10"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-x-1 items-center">
              <p className="text-titleText text-xs">@{video.author}</p>
              <p className="text-sideText text-[10px]">2 дня назад</p>
            </div>

            <p className="text-xs text-sideText"> Lorem ipsum Dollar</p>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src={video.author_avatar}
              alt=""
              fill
              className="rounded-full object-center object-cover min-w-10"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-x-1 items-center">
              <p className="text-titleText text-xs">@{video.author}</p>
              <p className="text-sideText text-[10px]">2 дня назад</p>
            </div>

            <p className="text-xs text-sideText"> Lorem ipsum Dollar</p>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src={video.author_avatar}
              alt=""
              fill
              className="rounded-full object-center object-cover min-w-10"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-x-1 items-center">
              <p className="text-titleText text-xs">@{video.author}</p>
              <p className="text-sideText text-[10px]">2 дня назад</p>
            </div>

            <p className="text-xs text-sideText"> Lorem ipsum Dollar</p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default CommentsBlock;
