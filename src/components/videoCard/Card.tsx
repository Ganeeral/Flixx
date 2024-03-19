import React from "react";
import Image from "next/image";

interface Video {
  id: number;
  title: string;
  author: string;
  views: string;
  publication_date: string;
  preview: string;
  author_avatar: string;
}

const Card: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <div className="max-w-[513px] w-full mx-auto rounded-2xl">
      <div className="max-h-[209px] min-h-[209px] w-full rounded-t-2xl h-auto">
        <Image
          src={video.preview}
          alt=""
          layout="responsive"
          width={100}
          height={100}
          className="rounded-2xl object-center object-cover max-h-[209px] min-h-[209px]"
        />
      </div>
      <div className="video__footer max-h-[128px] gap-x-4 h-auto py-6 px-4 flex flex-grow">
        <div className="h-10 w-10 rounded-full relative">
          <Image
            src={video.author_avatar}
            alt=""
            fill
            className="rounded-full object-center object-cover w-[40px]"
          />
        </div>
        <div className="video__content flex flex-col gap-y-1 flex-grow">
          <div className="flex flex-col">
            <h6 className="video__title text-base leading-5 font-bold overflow-ellipsis line-clamp-2">
              {video.title}
            </h6>
          </div>
          <div className="flex flex-col">
            <p className="text-xs leading-5 tracking-[-0.03em] text-nameChannel">
              {video.author}
            </p>
            <p className="text-xs leading-5 tracking-[-0.03em] text-nameChannel">
              {video.views} просмотров - {video.publication_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
