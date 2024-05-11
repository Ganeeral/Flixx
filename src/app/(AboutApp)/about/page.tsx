"use client";

import Link from "next/link";
import React from "react";
import HeaderAbout from "@/components/header/headerAbout";

const Page = () => {
  return (
    <div className="bg-backgroundAbout flex-grow h-full">
      <HeaderAbout />
      <div className="flex h-full justify-center bg-backgroundAbout  absolute overflow-hidden flix:overflow-visible w-full">
        <video
          autoPlay
          playsInline
          muted
          loop
          width="100%"
          height="100%"
          className="absolute max-w-[700px] scale-150 flix:scale-100 mt-6 flix:mt-0"
        >
          <source src="/video/videobg.webm" type="video/webm" />
        </video>

        <div className="flex translate-y-32 flex-col z-20">
          <span className="text-white sftext clampSpanAboutContainer">Сохраняем</span>
          <span className="text-white sftext clampSpanAboutContainer ml-64"> каждый</span>
          <span className="text-white sftext clampSpanAboutContainer">миг</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
