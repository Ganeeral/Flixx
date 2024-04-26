import React from "react";

interface Video {
  subscribers: number;
}

const formatSubscribers = (subscribers: number): string => {
  if (isNaN(subscribers) || subscribers === undefined) {
    return "";
  }

  if (subscribers >= 1000000) {
    return `${(subscribers / 1000000).toFixed(1)} млн подписчиков`;
  } else if (subscribers >= 1000) {
    return `${(subscribers / 1000).toFixed(0)} тыс. подписчиков`;
  } else {
    return `${subscribers} подписчиков`;
  }
};

interface ChannelInfoProps {
  video: Video;
}

const FormatSubs: React.FC<ChannelInfoProps> = ({ video }) => {
  const formattedSubscribers = formatSubscribers(video.subscribers);

  return (
    <p className="text-xs leading-5 tracking-[-0.03em] text-nameChannel">
      {formattedSubscribers}
    </p>
  );
};

export default FormatSubs;
