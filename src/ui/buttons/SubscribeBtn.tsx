import React from "react";
import { Kolok } from "../icons";


const SubscribeBtn = () => {
  return (
    <button className="rounded-lg gradientBtn px-4 py-1 flex justify-center items-center gap-x-3">
      <Kolok />
      <span className="hidden text-xs text-white leading-4 flix:block">
        Подписаться
      </span>
    </button>
  );
};

export default SubscribeBtn;
