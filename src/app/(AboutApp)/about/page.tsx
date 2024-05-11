"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import HeaderAbout from "@/components/header/headerAbout";
import BannerAbout from "@/sections/BannerAbout/BannerAbout";
import AboutCompany from "@/sections/AboutCompany/AboutCompany";

const Page = () => {
  return (
    <div className="bg-backgroundAbout h-full">
      <HeaderAbout />
      <BannerAbout />
      <AboutCompany />
      <div className="mx-auto max-w-[1200px] mt-20">
        <div className="flex flex-col gap-y-12 mx-6">
          <div className="flex flex-col justify-start">
            <h3 className="sftext clamp-title text-lightGray">
              Миссия платформы
            </h3>

            <div className="px-12 py-6 bg-background rounded-[100wmin]">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
