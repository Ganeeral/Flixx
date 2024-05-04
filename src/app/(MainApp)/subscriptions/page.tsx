import ChannelPreviewSection from "@/sections/channelPreview/channelPreviewSection";
import CategorySliderAccount from "@/sections/categoryslider/categorySliderAccount";
import React from "react";
import SubCard from "@/components/videoCard/subCard";

const subscriptions = () => {
  return (
    <>
      <ChannelPreviewSection />
      <CategorySliderAccount />

      <div className="flex flex-col gap-10 mx-8">
        <div className="textGradient mt-[40px] text-2xl">Подписки</div>
        <div className="max-w-[80vw] overflow-hidden sm-mobile:max-w-[88vw] mobile:max-w-[93vw]">
          <div className="bg-searchText mb-5 flex overflow-auto scrollbar-hide relative rounded-2xl p-5 tablet-s:grid tablet-s:grid-cols-4 tablet:grid-cols-5 laptop:grid-cols-6 desktop:grid-cols-7 bd:grid-cols-9 place-items-center gap-4">
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
            <SubCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default subscriptions;
