"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Video {
  title: string;
  description: string;
  url: string;
}
const url = "/video/nukesilo.mp4";

const VideoPage = ({ videoId }: { videoId: string }) => {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://flixx/src/api/getVideo.php?id=${videoId}`);
        setVideo(response.data);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
      <p className="text-gray-600 mb-4">{video.description}</p>
      <div className="video-container">
        <iframe
          src={video.url}
          title={video.title}
          allowFullScreen
          className="w-full"
        />
      </div>
    </div>
  );
};

export default VideoPage;

