"use client";

import Link from "next/link";
import React from "react";
import HeaderAbout from "@/components/header/headerAbout";

const Page = () => {
  return (
    <div className="bg-backgroundAbout flex-grow h-full">
      <HeaderAbout />
      <div className="flex h-full justify-center">
        <video
          autoPlay
          playsInline
          muted
          loop
          width="100%"
          height="100%"
          className="absolute max-w-[700px]"
        >
          <source src="/video/videobg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Page;
