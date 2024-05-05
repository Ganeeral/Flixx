"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Все видео",
    href: "/admin/dashboard",
  },
  {
    id: 2,
    name: "Новые",
    href: "/admin/dashboard/q?=new",
  },
  {
    id: 3,
    name: "Популярные",
    href: "/admin/dashboard/q?=popular",
  },
];

const videos = [
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
  },
  {
    id: 1,
    title: "Lorem ipsum dollar",
    username: "Lorem ipsum",
    preview: "/images/tree.jpg",
  },
];

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-6">
        <h4 className="text-display-1">Видео</h4>
        <div className="flex items-center gap-x-4 mobile:gap-x-8">
          {data.map((item) => (
            <Link
              className={`text-base mobile:text-lg ${
                pathname === item.href ? "text-black" : "text-sideText"
              }`}
              key={item.id}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
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
                  {item.title}
                </div>
                <div className="text-xs line-clamp-1 overflow-hidden">
                  {item.username}
                </div>
              </div>
          
            </div>
              <button className="border-2 px-5 py-3 rounded-lg bg-inherit whitespace-nowrap border-[#000]">
                К видео
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
