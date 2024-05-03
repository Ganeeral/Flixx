"use client";

import React, { useEffect, useState } from "react";
import { Video } from "@/types/video";
import CardLiked from "@/components/videoCard/CardLiked";

const Liked = () => {
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
      <h1 className="textGradient text-4xl font-bold mt-4 flix:mt-10">Понравившиеся</h1>

      <div className="flex flex-col gap-y-4 w-full">
        {videos.map((video: Video, index) => (
          <CardLiked key={video.id} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Liked;
