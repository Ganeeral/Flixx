"use client";

import React, { useEffect, useState } from "react";
import { TrashHistoryIcon, DeleteItemIcon } from "@/ui/icons";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Video } from "@/types/video";
import CardHistory from "@/components/videoCard/CardHistory";
import HistoryHead from "@/components/historyHead/HistoryHead";

const History = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("http://Flixx/src/api/getVideos.php");
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
        } else {
          console.error("Данные не получены или пусты");
        }
      } catch (error) {
        console.error("Ошибка получения данных:", error);
      }
    }

    fetchVideos();
  }, []);
  return (
    <div className="flex flex-col gap-y-4 mx-2 tablet-s:mx-10">
      <HistoryHead />

      <div className="flex flex-col gap-y-4 w-full">
        {videos.map((video: Video, index) => (
          <CardHistory key={video.id} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

export default History;
