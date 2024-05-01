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
import FormatWatch from "@/components/format/formatWatch";
import { formatRelativeDate } from "@/components/format/formatDateMain";
import VideoDescription from "@/components/videoDescription/videoDescription";
import AboutWatch from "@/components/aboutWatch/AboutWatch";
import SideVideo from "@/components/sideVideo/SideVideo";
import CommentsBlock from "@/components/commentsBlock/commentsBlock";

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

const Watch = ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

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

  return (
    <div
      className={cn(
        "flex flex-col mx-2 justify-center",
        "tablet-s:mx-5",
        "tablet:gap-x-5",
        "desktop:flex-row"
      )}
    >
      <div className={cn("mt-4 flex flex-col gap-y-4", "flix:mt-2")}>
        <MediaPlayer title={video.title} src={video.video_url}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>

        <AboutWatch video={video} />
        <div className="hidden desktop:block">
          <CommentsBlock video={video} />
        </div>
      </div>
      <div className="mt-3 desktop:mt-0">
        <SideVideo />
      </div>

      <div className="mt-5 block desktop:hidden">
        <CommentsBlock video={video} />
      </div>
    </div>
  );
};

export default Watch;
