import Image from "next/image";
import React from "react";

const SubCard = () => {
  return (
    <>
      <div className="bg-sideText rounded-xl min-w-[210px] tablet-s:min-w-0 tablet-s:max-w-[210px] w-full justify-center items-center py-4 flex flex-col gap-y-3">
        <div className="h-20 w-20 rounded-full flex justify-center items-center relative">
          <Image
            src="/images/tree.jpg"
            alt=""
            fill
            className="rounded-full object-center object-cover min-w-20"
          />
        </div>

        <div className="flex justify-center flex-col gap-x-4">
          <p className="text-base text-center text-white">Lorem Ipsum</p>
          <p className="text-xs text-center text-white">2,3 млн подписчиков</p>
        </div>

        <button className="px-4 py-2 text-xs text-white bg-searchText rounded-md">
          Вы подписаны
        </button>
      </div>
    </>
  );
};

export default SubCard;
