"use client";

import React, { useEffect, useState } from "react";
import WatchCard from "@/components/watchCard/page";
import Card from "@/components/videoCard/Card";
import Title from "@/components/title/page";

interface Video {
  videoUrl: string;
  id: number;
  title: string;
  author: string;
  views: string;
  publication_date: string;
  preview: string;
  author_avatar: string;
  description: string;
}

const Whatch = () => {
  const preview = "/images/tree.jpg";
  const videoUrl = "";

  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [expandedDescription, setExpandedDescription] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("http://Flixx/src/api/getVideos.php");
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
          setSelectedVideo(data[0]);
        } else {
          console.error("Данные не получены или пусты");
        }
      } catch (error) {
        console.error("Ошибка получения данных:", error);
      }
    }

    fetchVideos();
  }, []);

  // Функция для раскрытия/скрытия описания
  const toggleDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  return (
    <>
      <div className="px-2 flex flex-col flex-grow gap-x-5 tablet:flex-row flix:gap-y-5">
        <div className="flex flex-col">
          {selectedVideo && (
            <>
              <WatchCard preview={preview} videoUrl={videoUrl} />
              <h6 className="video__title text-base leading-5 font-bold overflow-ellipsis line-clamp-2">
                {selectedVideo.title}
              </h6>
              <button className="like-button">Like</button> {/* Кнопка лайка */}
              <div>Подписки</div> {/* Информация о подписках */}
              <div>Автор: {selectedVideo.author}</div> {/* Информация об авторе */}
              {/* Описание видео */}
              <div className="description">
                {expandedDescription
                  ? selectedVideo.description
                  : `${selectedVideo.description.substring(0, 100)}...`}
                {!expandedDescription && ( // Кнопка "еще" для раскрытия полного описания
                  <button onClick={toggleDescription}>Еще</button>
                )}
              </div>
              <div>Просмотры: {selectedVideo.views}</div> {/* Информация о просмотрах */}
              <div>Дата видео: {selectedVideo.publication_date}</div> {/* Дата видео */}
            </>
          )}
        </div>

        <div className="grid flex-grow grid-cols-1 gap-4 m-8">
          {videos.map((video: Video) => (
            <Card
              key={video.id}
              video={video}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Whatch;
