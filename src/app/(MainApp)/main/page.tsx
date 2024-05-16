"use client"

import React from "react";
import useSWR from "swr";
import Card from "@/components/videoCard/Card";
import CategorySlider from "@/sections/categoryslider/categorySlider";
import LineMain from "@/components/lineMain/LineMain";
import { Video } from "@/types/video";

const MainPage: React.FC = () => {
  const { data: videos, error } = useSWR("http://Flixx/src/api/getVideos.php", async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    const data = await response.json();
    return data;
  });

  if (error) {
    return <div>Ошибка загрузки данных: {error.message}</div>;
  }

  return (
    <>
      <CategorySlider />
      <LineMain />
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-4 m-8">
        {videos && videos.map((video: Video) => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default MainPage;
