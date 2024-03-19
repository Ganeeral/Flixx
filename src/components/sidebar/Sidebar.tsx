"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import Separator from "../separator/separator";
import React from "react";
import { usePathname } from "next/navigation";

import {
  BurgerIcon,
  BellIcon,
  CreateVideoIcon,
  HictoryIcon,
  HouseIcon,
  LaterIcon,
  LikeIcon,
  MicrophoneIcon,
  MusicIcon,
  SearchIcon,
  ShortsIcon,
  SubIcon,
  VideoIcon,
  LogoIcon,
  ChevronRight,
  RingG,
  RingGMobile,
  BurgerIconMobile,
} from "../../ui/icons/index";

const data = [
  {
    items: [
      {
        title: "Главная",
        icon: HouseIcon,
        to: "/",
      },
      {
        title: "Shorts",
        icon: ShortsIcon,
        to: "/shorts",
      },
      {
        title: "Подписки",
        icon: SubIcon,
        to: "/subscriptions",
      },
      {
        title: "Музыка",
        icon: MusicIcon,
        to: "/music",
      },
    ],
  },
];
const chanel = [
  {
    name: "Мой канал",
    items: [
      {
        title: "История",
        icon: HictoryIcon,
        to: "/history",
      },
      {
        title: "Ваши видео",
        icon: VideoIcon,
        to: "/your-videos",
      },
      {
        title: "Понравившиеся",
        icon: LikeIcon,
        to: "/liked-videos",
      },
      {
        title: "Смотреть позже",
        icon: LaterIcon,
        to: "/watch-later",
      },
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState(false);
  const [isColumn, setIsColumn] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTextUp = useAnimation();
  const controlTitleText = useAnimation();
  const pathname = usePathname();

  const showMore = () => {
    setIsColumn(false);
    controls.start({
      width: "248px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    });

    setActive(true);
  };
  const showLess = () => {
    setIsColumn(true);
    controls.start({
      width: "84px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTextUp.start({
      opacity: 1,
      display: "block",
    });

    controlTitleText.start({
      opacity: 0,
    });


    setActive(false);
  };

  useEffect(() => {
    showLess();
  }, []);

  return (
    <div
      className={`max-w-[248px] hidden tablet-s:block w-full`}
    >
      <div className={`max-w-[248px] z-20 absolute `}>
        <motion.div
          animate={controls}
          className={`sideBar max-w-[248px] animate duration-300 relative flex flex-col py-10 h-screen group`}
        >
          <div
            className=" flex items-center"
            style={{
              flexDirection: isColumn ? "column" : "row",
              padding: isColumn ? 0 : "24px",
              columnGap: isColumn ? 0 : "16px",
              rowGap: isColumn ? 16 : "0",
            }}
          >
            {active && (
              <BurgerIcon className="cursor-pointer" onClick={showLess} />
            )}
            {!active && (
              <BurgerIcon className="cursor-pointer" onClick={showMore} />
            )}
            <Link legacyBehavior href="/">
              <a>
                <svg
                  width="48"
                  height="26"
                  viewBox="0 0 48 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.728 26V0.799998H13.868V5.12H5.66V11.42H12.788V15.596H5.66V26H0.728ZM21.2427 0.799998V26H16.4907V0.799998H21.2427ZM25.0505 26V7.604H29.8025V26H25.0505ZM25.0505 0.799998H29.8025V5.66H25.0505V0.799998ZM39.6943 14.444L41.9263 7.604H46.9303L43.5103 16.568L47.0743 26H42.1423L39.6583 18.872H39.5143L37.1383 26H32.2063L35.7703 16.568L32.3503 7.604H37.2823L39.5503 14.444H39.6943Z"
                    fill="url(#paint0_linear_10_333)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_10_333"
                      x1="59.8788"
                      y1="7.19355"
                      x2="22.9334"
                      y2="35.254"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#472078" />
                      <stop offset="1" stopColor="#F6416C" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </Link>
          </div>
          <div
            className="mt-5"
            style={{
              marginTop: isColumn ? "18px" : "0px",
              columnGap: isColumn ? 0 : "16px",
            }}
          >
            <Separator />
          </div>

          <div>
            {data.map((group, index) => (
              <div
                key={index}
                className="flex flex-col"
                style={{ alignItems: isColumn ? "center" : "stretch" }}
              >
                {group.items.map((item, index2) => (
                  <React.Fragment key={index2}>
                    <Link legacyBehavior href={item.to}>
                      <a
                        className={`sideBar__item flex flex-col px-6 py-4 cursor-pointer ${
                          pathname === item.to
                            ? "sideBar__item active"
                            : "sideBar__item"
                        }`}
                      >
                        <div
                          className="flex items-center gap-y-1"
                          style={{ flexDirection: isColumn ? "column" : "row" }}
                        >
                          <div className="relative">
                            <item.icon className="icon" />
                            <RingG className="ringIcon z-30" />
                          </div>
                          <motion.p
                            animate={controlTextUp}
                            className="sideBar__text ml-6 text-b3 text-sideText"
                            style={{
                              marginLeft: isColumn ? "0" : "24px",
                              fontSize: isColumn ? "12px" : "16px",
                              marginTop: isColumn ? "6px" : "0",
                            }}
                          >
                            {item.title}
                          </motion.p>
                        </div>
                      </a>
                    </Link>
                    {!isColumn && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
          <div>
            <motion.div animate={controlText}>
              {chanel.map((group, index) => (
                <div key={index}>
                  <motion.p
                    animate={controlTitleText}
                    className="my-[14px] ml-4 flex items-center gap-x-2 px-2 text-sm font-bold text-white"
                  >
                    <Link legacyBehavior href={"/channel"}>
                      <a className="flex items-center gap-x-2">
                        {group.name} <ChevronRight />
                      </a>
                    </Link>
                  </motion.p>

                  {group.items.map((item, index2) => (
                    <React.Fragment key={index2}>
                      <Link legacyBehavior href={item.to}>
                        <a
                          className={`sideBar__item flex items-center px-6 py-4 cursor-pointer ${
                            pathname === item.to
                              ? "sideBar__item active"
                              : "sideBar__item"
                          }`}
                        >
                          <div className="relative">
                            <item.icon className="icon" />
                            <RingG className="ringIcon" />
                          </div>
                          <motion.p
                            animate={controlText}
                            className="sideBar__text ml-6 text-b3 text-sideText"
                          >
                            {" "}
                            {item.title}
                          </motion.p>
                        </a>
                      </Link>
                      {<Separator />}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
