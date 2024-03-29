"use client";

import React, { useState, useEffect } from "react";
import { UploadIcon } from "@/ui/icons/index";
import ChannelPreviewSection from "@/sections/channelPreview/channelPreviewSection";

interface VideoData {
  id: string;
  title: string;
  description: string;
  preview: File | string;
  video: File | string;
}

interface Props {
  videoId: string;
}

function EditVideoPage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const [videoData, setVideoData] = useState<VideoData>({
    id: "",
    title: "",
    description: "",
    preview: "",
    video: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [previewFileName, setPreviewFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `http://flixx/src/api/getVideo.php?id=${params.id}`
        );
        const data = await response.json();
        if (response.ok) {
          setVideoData(data);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchVideoData();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setVideoData({
      ...videoData,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id", videoData.id);
      formDataToSend.append("title", videoData.title);
      formDataToSend.append("description", videoData.description);
      formDataToSend.append("preview", videoData.preview);
      formDataToSend.append("video", videoData.video);

      const response = await fetch("http://flixx/src/api/editVideo.php", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <>
      <ChannelPreviewSection />
      <div className="m-3">
        <h1 className="textGradient mt-[50px] tablet:ml-[60px] text-2xl font-bold mb-4">
          Редактировать видео
        </h1>
        <div className="flex flex-col justify-center items-center">
          {showSuccessMessage && (
            <div className="bg-green-200 text-green-800 rounded-md p-3 mb-3">
              Видео успешно отредактировано!
            </div>
          )}
          <div className="flex flex-col justify-center items-center">
            <form
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
              className="flex justify-center gap-y-7 flix:gap-y-0 flex-col max-w-[860px] w-full"
            >
              <div className="flex flex-col flix:flex-row justify-center gap-x-7 gap-y-7 flix:gap-y-0">
                <div className="">
                  <label htmlFor="title" className="text-base text-gray-text">
                    Название
                  </label>
                  <div className="max-w-[270px] mt-[10px] max-h-[45px] h-full w-full rounded-lg bg-[#F5F5F5]">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Введите название видео"
                      value={videoData.title}
                      onChange={handleChange}
                      className="bg-inherit pl-[14px] pr-[45px] pt-[13px] pb-[8px] rounded-lg outline-none text-[#8A8A8A]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="description"
                  className="text-base text-gray-text"
                >
                  Описание
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={videoData.description}
                  onChange={handleChange}
                  className="rounded-lg px-[17px] text-gray-text py-[13px] outline-none bg-[#F5F5F5] h-[126px] flix:h-[176px] w-full"
                  placeholder="Введите описание видео"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="addBtn text-white px-6 outline-none py-3 rounded-xl"
                >
                  Редактировать
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditVideoPage;
