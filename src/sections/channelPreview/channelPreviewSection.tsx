import React from "react";
import Image from "next/image";
import {Kolok } from "@/ui/icons/index"

const ChannelPreviewSection = () => {
  return (
    <>
      <div className="max-h-[352px] px-2 min-h-[192px] w-full h-full relative">
        <div className="relative">
          <Image
            src={"/images/japan.png"}
            width={100}
            layout="responsive"
            height={100}
            alt=""
            className="object-center rounded-[20px] object-cover max-h-[352px] w-full h-full min-h-[192px]"
          />
          <div className="px-2 py-2 flix:px-14 flix:py-8 absolute bottom-0 w-full">
            <div className="flex justify-between items-end">
              <div className="about__author flex gap-x-[18px]">
                <div className="h-[36px] w-[36px] flix:h-[46px] flix:w-[46px] rounded-full relative">
                  <Image
                    src={"/images/tree.jpg"}
                    alt=""
                    fill
                    className="rounded-full object-center object-cover w-[36px] flix:w-[46px]"
                  />
                </div>
                <div>
                  <p className="text-white text-sm flix:text-xl leading-5">Lorem Ipsum</p>
                  <p className="text-authorPreview text-[0.75rem] flix:text-sm leading-5">@LoremIpsum</p>
                  <p className="text-authorPreview text-[0.75rem] flix:text-sm leading-5">199k подписчиков</p>
                </div>
              </div>
              <div className="author__sub cursor-pointer justify-center flex gap-x-[15px] py-[13px] px-[20px] flix:px-[35px] rounded-[20px]">
                <Kolok/>
                <div className="hidden flix:block">
                    <p className="text-xs text-white">Подписаться</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelPreviewSection;
