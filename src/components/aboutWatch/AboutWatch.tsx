import Image from "next/image";
import React, { useState } from "react";
import cn from "classnames";
import FormatSubs from "../format/formatSubs";
import SubscribeBtn from "@/ui/buttons/SubscribeBtn";
import LikeBtn from "@/ui/buttons/LikeBtn";
import ShareBtn from "@/ui/buttons/ShareBtn";
import FormatWatch from "../format/formatWatch";
import VideoDescription from "../videoDescription/videoDescription";
import { formatRelativeDate } from "../format/formatDateMain";

interface Video {
  id: number;
  title: string;
  author: string;
  views: number;
  publication_date: string;
  preview: string;
  description: string;
  video_url: string;
  author_avatar: string;
  subscribers: number;
  username: string;
}

interface ChannelInfoProps {
  video: Video | null;
}

const AboutWatch: React.FC<ChannelInfoProps> = ({ video }) => {
  if (!video) return null;
  const relativeDate = video ? formatRelativeDate(video.publication_date) : "";

  return (
    <div className={cn("flex w-full flex-col gap-y-3")}>
      <h3 className="text-xl leading-5 text-titleText text-wrap w-full overflow-hidden">{video?.title}</h3>

      <div
        className={cn(
          "flex flex-col gap-y-4",
          "flix:flex-row flix:items-center"
        )}
      >
        <div className="video__footer max-h-[128px] w-full items-center gap-x-4 h-auto flex">
          <div className="h-[53px] w-[53px] rounded-full relative">
            <Image
              src={video?.author_avatar || ""}
              alt=""
              fill
              className="rounded-full object-center object-cover"
            />
          </div>
          <div className="flex-grow flix:flex-grow-0">
            <div className="flex justify-between gap-y-1 f gap-x-10 flex-grow">
              <div className="flex flex-col">
                <p className="leading-5 tracking-[-0.03em] text-sideText">
                  {video?.author}
                </p>
                <p className="text-xs mobile:text-sm leading-5 tracking-[-0.03em] text-sideText">
                  <FormatSubs video={video} />
                </p>
              </div>
              <SubscribeBtn />
            </div>
          </div>
        </div>

        <div className="flex gap-x-3">
          <LikeBtn />
          <ShareBtn />
        </div>
      </div>

      <div
        className={cn(
          "bg-searchText rounded-xl w-full max-w-[866px] mt-4 p-3",
          "flix:mt-7"
        )}
      >
        <p className="flex gap-x-1 text-base leading-5 tracking-[-0.03em] text-titleText">
          <FormatWatch video={video} /> • {relativeDate}
        </p>

        {video && <VideoDescription description={video.description} />}
      </div>
    </div>
  );
};

export default AboutWatch;
