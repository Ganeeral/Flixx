"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/videoCard/Card";
import CategorySlider from "@/sections/categoryslider/categorySlider";
import LineMain from "@/components/lineMain/LineMain";

interface Video {
  id: number;
  title: string;
  author: string;
  views: string;
  publication_date: string;
  preview: string;
  author_avatar: string;
}

function App() {
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

  return (
    <>
      <CategorySlider />
      <LineMain />
      <div className="grid grid-cols-1 flix:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 m-8">
        {videos.map((video: Video) => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default App;
