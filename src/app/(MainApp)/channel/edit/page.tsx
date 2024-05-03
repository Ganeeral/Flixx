"use client";

import ChannelPreviewSection from "@/sections/channelPreview/channelPreviewSection";
import { UploadIcon } from "@/ui/icons";
import React, { useState } from "react";

interface UserData {
  id: string;
  username: string;
  author_avatar: string;
  banner: File | string;
}

const EditChannel = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [previewFileName, setPreviewFileName] = useState("");

  const [UserData, setUserData] = useState<UserData>({
    id: "",
    username: "",
    author_avatar: "",
    banner: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...UserData,
      [name]: value,
    });
  };

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target;
    if (
      e.target instanceof HTMLInputElement &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      if (file) {
        setPreviewFileName(e.target.files[0].name);
        setUserData({
          ...UserData,
          banner: e.target.files[0],
        });
      }
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id", UserData.id);
      formDataToSend.append("title", UserData.username);
      formDataToSend.append("description", UserData.author_avatar);
      formDataToSend.append("preview", UserData.banner);

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
          Редактировать профиль
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
              <div className="flex flex-col flix:flex-row justify-center gap-x-7 gap-y-4 flix:gap-y-0">
                <div className="flex flex-col gap-y-7">
                  <div className="">
                    <label htmlFor="title" className="text-base text-gray-text">
                      Имя канала
                    </label>
                    <div className="max-w-[270px] mt-[10px] max-h-[45px] h-full w-full rounded-lg bg-[#F5F5F5]">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Название вашего канала"
                        value={UserData.username}
                        onChange={handleChange}
                        className="bg-inherit w-full pl-[14px] pr-[15px] pt-[13px] pb-[8px] rounded-lg outline-none text-[#8A8A8A]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="preview"
                      className="text-base text-gray-text"
                    >
                      Загрузка аватарки
                    </label>
                    <div className="max-w-[270px] mt-[10px] cursor-pointer flex-col flex justify-center items-center max-h-[84px] relative h-full w-full rounded-lg duration-300  hover:bg-[#e7e7e7] bg-[#F5F5F5]">
                      {!previewFileName && (
                        <div className="absolute pointer">
                          <UploadIcon />
                        </div>
                      )}
                      {typeof UserData.banner === "object" && (
                        <div className="absolute pointer">
                          {UserData.banner.name}
                        </div>
                      )}
                      <input
                        type="file"
                        id="preview"
                        name="preview"
                        onChange={handlePreviewChange}
                        accept="image/*"
                        className="bg-inherit py-[16px] cursor-pointer opacity-0 flex rounded-lg outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="">
                    <label
                      htmlFor="preview"
                      className="text-base text-gray-text"
                    >
                      Загрузка баннера
                    </label>
                    <div className="max-w-[270px] mt-[10px] cursor-pointer flex-col flex justify-center items-center max-h-[170px] relative h-full w-full rounded-lg duration-300  hover:bg-[#e7e7e7] bg-[#F5F5F5]">
                      {!previewFileName && (
                        <div className="absolute pointer">
                          <UploadIcon />
                        </div>
                      )}
                      {typeof UserData.banner === "object" && (
                        <div className="absolute pointer">
                          {UserData.banner.name}
                        </div>
                      )}
                      <input
                        type="file"
                        id="preview"
                        name="preview"
                        onChange={handlePreviewChange}
                        accept="image/*"
                        className="bg-inherit py-[16px] cursor-pointer opacity-0 flex rounded-lg outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditChannel;
