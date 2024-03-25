"use client";

import React, { useEffect, useState } from "react";
import WatchCard from "@/components/watchCard/page";
import axios from "axios";

interface Video {
  id: number;
  title: string;
  author: string;
  views: string;
  publication_date: string;
  preview: string;
  description: string;
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
    <div className="px-2 flex flex-col flex-grow gap-x-5 tablet:flex-row flix:gap-y-5">
      <div className="flex flex-col">
        {video && (
          <>
            <WatchCard preview={video.preview} videoUrl={video.preview} />
            <h6 className="video__title text-base leading-5 font-bold overflow-ellipsis line-clamp-2">
              {video.title}
            </h6>
            <button className="like-button">Like</button>
            <div>Автор: {video.author}</div>

            <div className="description">
              {video.description && expandedDescription
                ? video.description
                : video.description
                ? `${video.description.substring(0, 100)}...`
                : "Описания нету"}
              {!expandedDescription && video.description && (
                <button onClick={toggleDescription}>Еще</button>
              )}
            </div>
            <div>Просмотры: {video.views}</div>
            <div>Дата видео: {video.publication_date}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Watch;
