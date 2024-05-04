"use client";

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { getRandomBackgroundImage } from "@/utils/backgroundImages";
import { redirect } from "next/navigation";
import { CloseIcon, HideIcon } from "@/ui/icons";
import cn from "classnames";
import Link from "next/link";

const AuthPage: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<StaticImageData>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  useEffect(() => {
    const randomImage = getRandomBackgroundImage();
    setBackgroundImage(randomImage);
  }, []);

  const handleLogin = () => {
    redirect("/");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="min-w-[300px] max-w-[670px] w-full flex flex-col gap-y-4 mx-2">
        <div className="rounded-[36px] backgroundAuth p-4 flex flex-col gap-y-8">
          <div className="relative flex justify-center ">
            <svg
              width="72"
              height="78"
              viewBox="0 0 72 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_388_1585)">
                <circle cx="36" cy="38" r="32" fill="white" />
              </g>
              <path
                d="M50.424 19.216C50.7227 19.6853 50.9787 20.3253 51.192 21.136C51.448 21.904 51.576 22.7147 51.576 23.568C51.576 25.232 51.2133 26.4267 50.488 27.152C49.8053 27.8347 48.8667 28.176 47.672 28.176H34.232V35.408H48.248C48.5893 35.8773 48.8667 36.496 49.08 37.264C49.336 38.032 49.464 38.8427 49.464 39.696C49.464 41.3173 49.1013 42.4907 48.376 43.216C47.6933 43.8987 46.7547 44.24 45.56 44.24H34.36V57.744C33.8907 57.872 33.144 58 32.12 58.128C31.1387 58.256 30.1573 58.32 29.176 58.32C28.1947 58.32 27.32 58.2347 26.552 58.064C25.8267 57.936 25.208 57.68 24.696 57.296C24.184 56.912 23.8 56.3787 23.544 55.696C23.288 55.0133 23.16 54.1173 23.16 53.008V25.168C23.16 23.3333 23.6933 21.8827 24.76 20.816C25.8267 19.7493 27.2773 19.216 29.112 19.216H50.424Z"
                fill="url(#paint0_linear_388_1585)"
              />
              <defs>
                <filter
                  id="filter0_d_388_1585"
                  x="0"
                  y="6"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_388_1585"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_388_1585"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_388_1585"
                  x1="29.625"
                  y1="29"
                  x2="54.9993"
                  y2="6.47224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7426D" />
                  <stop offset="1" stop-color="#732975" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute right-0">
              <Link href="/">
                <CloseIcon />
              </Link>
            </div>
          </div>

          <form
            className={cn(
              "px-4 py-2 flex justify-center items-center flex-col border divide-solid rounded-3xl border-black gap-y-12",
              "mobile:px-10 flix:py-8",
              "tablet-s:px-14 tablet-s:py-10"
            )}
          >
            <label className="text-center text-display-2 text-searchText">
              Войти
            </label>
            <div className="flex flex-col gap-y-6 w-full">
              <div className="flex flex-col gap-y-3 max-w-[528px] w-full">
                <label className="text-searchText text-xl leading-5">
                  Логин
                </label>
                <input
                  type="text"
                  className="border divide-solid border-[#666666] bg-inherit h-[56px] rounded-xl outline-none px-2 text-searchText text-xl w-full"
                />
              </div>
              <div className="flex flex-col gap-y-3 max-w-[528px] w-full">
                <div className="flex justify-between w-full">
                  <label className="text-searchText text-xl leading-5">
                    Пароль
                  </label>
                  <div className="cursor-pointer">
                    <HideIcon onClick={togglePasswordVisibility} />
                  </div>
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="border divide-solid border-[#666666] bg-inherit h-[56px] rounded-xl outline-none px-2 text-searchText text-xl w-full"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <button className="w-full text-xl leading-5 rounded-[40px] p-5 bg-blacked text-white">
                  Войти
                </button>
                <p className="text-searchText text-xs mobile:text-base text-center">
                  Продолжая, вы соглашаетесь с{" "}
                  <a
                    href="privacy_policy.pdf"
                    className="text-blacked underline underline-offset-4"
                  >
                    Политикой конфиденциальности.
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
        <Link href="/registration">
          <button className="w-full text-xl leading-5 rounded-[40px] p-5 bg-blacked text-white">
            Создать аккаунт
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
