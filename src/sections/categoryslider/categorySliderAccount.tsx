"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CommunityIcon,
  HomeIcon,
  SubsIcon,
  VideosIcon,
} from "@/ui/icons/index";

const categories = [
  {
    title: "Главная",
    to: "/channel",
    icon: <HomeIcon />,
  },
  {
    title: "Видео",
    to: "/channel",
    icon: <VideosIcon />,
  },
  {
    title: "Подписки",
    to: "/channel",
    icon: <SubsIcon />,
  },
  {
    title: "Сообщество",
    to: "/channel",
    icon: <CommunityIcon />,
  },
];

const SliderAccount: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <div className="category flex flix:ml-5 mt-[25px]">
      <div className="max-w-[100vw] overflow-hidden flix:max-w-[85vw]">
        <div className="flex items-center justify-between px-4">
          <div className="flex rounded-[46px] bg-[#F4F4F4] overflow-auto scrollbar-hide relative">
            {categories.map((category, index) => (
              <div key={index} className="flex-shrink-0">
                <Link href={category.to}>
                  <div
                    className={`cursor-pointer px-6 py-[17px] ${
                      selectedCategory === index
                        ? "bg-[#ECECEC] text-black duration-300 rounded-[74px]"
                        : "bg-[#F4F4F4] text-black hover:rounded-[74px] duration-300"
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <div className="flex items-center gap-x-5">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderAccount;
