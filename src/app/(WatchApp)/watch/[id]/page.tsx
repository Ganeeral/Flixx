"use client";

import React, { useEffect, useState } from "react";
import WatchCard from "@/components/watchCard/page";
import axios from "axios";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import cn from "classnames";
import Image from "next/image";
import SubscribeBtn from "@/ui/buttons/SubscribeBtn";
import FormatSubs from "@/components/format/formatSubs";
import LikeBtn from "@/ui/buttons/LikeBtn";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import ShareBtn from "@/ui/buttons/ShareBtn";

interface Video {
  id: number;
  title: string;
  author: string;
  views: string;
  publication_date: string;
  preview: string;
  description: string;
  video_url: string;
  author_avatar: string;
  subscribers: number;
}

const Watch = ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [expandedDescription, setExpandedDescription] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `http://flixx/src/api/getVideo.php?id=${params.id}`
        );
        setVideo(response.data);
      } catch (error) {
        console.error("Ошибка при извлечении видео:", error);
      }
    };

    fetchVideo();
  }, [params.id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const toggleDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  return (
    <div
      className={cn(
        "flex flex-col ml-2 mr-2",
        "tablet-s:ml-5 tablet-s:mr-5",
        "tablet:flex-row gap-x-5"
      )}
    >
      <div className={cn("mt-4 flex flex-col gap-y-4", "flix:mt-2")}>
        <MediaPlayer title={video.title} src={video.video_url}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>

        <div className={cn("flex flex-col gap-y-3")}>
          <h3 className="text-xl leading-5 text-searchText">{video.title}</h3>

          <div
            className={cn(
              "flex flex-col gap-y-4",
              "flix:flex-row flix:items-center"
            )}
          >
            <div className="video__footer max-h-[128px] w-full items-center gap-x-4 h-auto flex">
              <div className="h-[53px] w-[53px] rounded-full relative">
                <Image
                  src={video.author_avatar}
                  alt=""
                  fill
                  className="rounded-full object-center object-cover"
                />
              </div>
              <div className="flex-grow flix:flex-grow-0">
                <div className="flex justify-between gap-y-1 f gap-x-10 flex-grow">
                  <div className="flex flex-col">
                    <p className="leading-5 tracking-[-0.03em] text-black">
                      {video.author}
                    </p>
                    <FormatSubs video={video} />
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
        </div>
      </div>
    </div>
  );
};

export default Watch;
