"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  {
    title: "Все",
    to: "/",
  },
  {
    title: "Видеоигры",
    to: "/shorts",
  },
  {
    title: "Музыка",
    to: "/subscriptions",
  },
  {
    title: "Сериалы",
    to: "/music",
  },
  {
    title: "Триллеры",
    to: "/music",
  },
];

const Slider: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <div className="category flex mt-[80px]">
      <div className="max-w-[100vw] overflow-hidden flix:max-w-[85vw]">
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-x-6 rounded-[4px] overflow-auto scrollbar-hide relative">
            {categories.map((category, index) => (
              <div key={index} className="flex-shrink-0">
                <Link href={category.to}>
                  <div
                    className={`cursor-pointer px-4 py-2 rounded-[6px] ${
                      selectedCategory === index
                        ? "bg-[#5C5C5C] text-white"
                        : "bg-gray-1 text-white hover:bg-gray-2 duration-300"
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    {category.title}
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

export default Slider;
