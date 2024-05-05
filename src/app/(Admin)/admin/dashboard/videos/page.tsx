"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SearchAdminIcon } from "@/ui/icons";
import DropdownBtn from "@/components/dropDownList/DropDown";

const videos = [
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
    idVideo: "2",
    idUser:'121',
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
    idVideo: "2",
    idUser:'121',
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
    idVideo: "2",
    idUser:'121',
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
    idVideo: "2",
    idUser:'121',
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
    idVideo: "2",
    idUser:'121',
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
    idVideo: "2",
    idUser:'121',
  },
];

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-6 flix:flex-row flix:justify-between flix:w-full flix:items-center">
        <h4 className="text-display-1">Жалобы</h4>
        <div className="flex items-center p-3 gap-x-1 bg-lightGray rounded-lg w-full flix:max-w-[260px]">
          <div className="">
            <SearchAdminIcon />
          </div>
          <input
            type="text"
            placeholder="Введите название видео"
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
                  {item.title} <span className="text-[#7D7D7D] text-[10px]">idVideo:{item.idVideo}</span>
                </div>
                <div className="text-xs line-clamp-1 overflow-hidden">
                  {item.username} <span className="text-[#7D7D7D] text-[10px]">idUser:{item.idUser}</span>
                </div>
              </div>
            </div>
            <DropdownBtn/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
