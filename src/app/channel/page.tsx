"use client";

import React, { useEffect, useState } from "react";
import ChannelPreviewSection from '@/sections/channelPreview/channelPreviewSection'
import CategorySliderAccount from "@/sections/categoryslider/categorySliderAccount"
import CardChannel from "@/components/videoCard/cardChannel"

interface Video {
  id: number;
  title: string;
  author: string;
  views: string;
  publication_date: string;
  preview: string;
  author_avatar: string;
}

function Channel() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("http://kursach/src/api/getVideos.php");
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

  const updateVideos = async () => {
    try {
      const response = await fetch("http://kursach/src/api/getVideos.php");
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setVideos(data);
      } else {
        console.error("Данные не получены или пусты");
      }
    } catch (error) {
      console.error("Ошибка получения данных:", error);
    }
  };

  return (
    <>
    <ChannelPreviewSection/>
    <CategorySliderAccount/>
    <div className="textGradient ml-8 mt-[40px] text-2xl">
      Видео
    </div>
      <div className="grid grid-cols-1 flix:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 m-8">
        {videos.map((video: Video) => (
          <CardChannel key={video.id} video={video} updateVideos={updateVideos} />
        ))}
      </div>
    </>
  );
}
export default Channel;
