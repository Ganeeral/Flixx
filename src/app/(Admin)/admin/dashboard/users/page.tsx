"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SearchAdminIcon } from "@/ui/icons";
import DropdownBtn from "@/components/dropDownList/DropDown";
import DropdownUser from "@/components/dropDownList/DropDownUser";

const videos = [
  {
    id: 1,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
  {
    id: 2,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
  {
    id: 3,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
  {
    id: 4,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
  {
    id: 5,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
  {
    id: 6,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
  {
    id: 7,
    username: "@Loremipsum",
    date: "28.03.2024",
    preview: "/images/tree.jpg",
  },
];

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-6 flix:flex-row flix:justify-between flix:w-full flix:items-center">
        <h4 className="text-display-1">Пользователи</h4>
        <div className="flex items-center p-3 gap-x-1 bg-lightGray rounded-lg w-full flix:max-w-[290px]">
          <div className="">
            <SearchAdminIcon />
          </div>
          <input
            type="text"
            placeholder="Введите логин пользователя"
            className="placeholder:text-searchText placeholder:text-base bg-inherit outline-none text-searchText text-xs mobile:text-base w-full"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-5">
        {videos.map((item) => (
          <div
            key={item.id}
            className="flex w-full items-center justify-between p-2 bg-lightGray rounded-xl"
          >
            <div className="flex gap-x-6 items-center">
              <Image
                src={item.preview}
                alt=""
                layout="responsive"
                width={100}
                height={100}
                className="min-w-[64px] max-w-[64px] min-h-[64px] rounded-xl object-cover object-center"
              />
              <div className="flex flex-col gap-y-2">
                <div className="text-sm line-clamp-1 overflow-hidden">
                  {item.username}
                </div>
                <div className="text-[10px] mobile:text-xs flex gap-x-1 flex-wrap line-clamp-2 overflow-hidden">
                  Дата регистрации:{" "}
                  <span className="text-[#5A5A5A] text-[10px] bg-[#D9D9D9] rounded px-2 py-[2px]">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
            <DropdownUser />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
