"use client";


import React, { useEffect, useState } from "react";
import Card from "@/components/videoCard/Card";
import CategorySlider from "@/sections/categoryslider/categorySlider";
import LineMain from "@/components/lineMain/LineMain";
import { Video } from "@/types/video";

const MainPage: React.FC = () => {
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
    <>
      <CategorySlider />
      <LineMain />
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-4 m-8">
        {videos.map((video: Video) => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default MainPage;
