"use client";

import ChannelPreviewSection from "@/sections/channelPreview/channelPreviewSection";
import { UploadIcon } from "@/ui/icons";
import React, { useEffect, useState } from "react";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import ChannelPreview from "@/sections/channelPreview/channelPreview";

interface UserData {
  id: string;
  username: string;
  author_avatar: File | string;
  preview: File | string;
}

const EditChannel = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [previewFileName, setPreviewFileName] = useState("");
  const [avatarFileName, setAvatarFileName] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const { push } = useRouter();

  const [userData, setUserData] = useState<UserData>({
    id: "",
    username: "",
    author_avatar: "",
    preview: "",
  });

  useEffect(() => {
    async function fetchUserDetails() {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        console.error("Пользователь не авторизован");
        return;
      }
      try {
        const response = await fetch(
          "http://flixx/src/api/getUserDetails.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: userId }),
          }
        );
        const data = await response.json();
        if (data && !data.message) {
          setUser(data);
          setUserData({
            id: data.id,
            username: data.username,
            author_avatar: data.author_avatar,
            preview: data.preview,
          });
        } else {
          console.error("Пользователь не найден");
        }
      } catch (error) {
        console.error("Ошибка получения данных о пользователе:", error);
      }
    }

    fetchUserDetails();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
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
          ...userData,
          preview: e.target.files[0],
        });
      }
    }
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target;
    if (
      e.target instanceof HTMLInputElement &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      if (file) {
        setAvatarFileName(e.target.files[0].name);
        setUserData({
          ...userData,
          author_avatar: e.target.files[0],
        });
      }
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      console.error("Пользователь не авторизован");
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id", userId);
      formDataToSend.append("username", userData.username);
      if (typeof userData.author_avatar === "object") {
        formDataToSend.append("author_avatar", userData.author_avatar);
      }
      if (typeof userData.preview === "object") {
        formDataToSend.append("preview", userData.preview);
      }

      const response = await fetch("http://flixx/src/api/editUser.php", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        setShowSuccessMessage(true);
        setTimeout(() => {
          push("/channel");
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
      {user && <ChannelPreview user={user} video={null} />}
      <div className="m-3">
        <h1 className="textGradient mt-[50px] tablet:ml-[60px] text-2xl font-bold mb-4">
          Редактировать профиль
        </h1>
        <div className="flex flex-col justify-center items-center">
          {showSuccessMessage && (
            <div className="bg-green-200 text-green-800 rounded-md p-3 mb-3">
              Профиль успешно отредактирован!
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
                    <label
                      htmlFor="username"
                      className="text-base text-gray-text"
                    >
                      Имя канала
                    </label>
                    <div className="max-w-[270px] mt-[10px] max-h-[45px] h-full w-full rounded-lg bg-searchText">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Название вашего канала"
                        value={userData.username}
                        onChange={handleChange}
                        className="bg-inherit w-full pl-[14px] pr-[15px] pt-[13px] pb-[8px] rounded-lg outline-none text-[#8A8A8A]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      htmlFor="author_avatar"
                      className="text-base text-gray-text"
                    >
                      Загрузка аватарки
                    </label>
                    <div className="max-w-[270px] mt-[10px] cursor-pointer flex-col flex justify-center items-center max-h-[84px] relative h-full w-full rounded-lg duration-300  hover:bg-[#464646] bg-searchText">
                      {!avatarFileName && (
                        <div className="absolute pointer">
                          <UploadIcon />
                        </div>
                      )}
                      {typeof userData.author_avatar === "object" && (
                        <div className="absolute pointer">
                          <span className="text-sideText text-center line-clamp-1 overflow-hidden w-[230px]">
                            {userData.author_avatar.name}
                          </span>
                        </div>
                      )}
                      <input
                        type="file"
                        id="author_avatar"
                        name="author_avatar"
                        onChange={handleAvatarChange}
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
                    <div className="max-w-[270px] mt-[10px] cursor-pointer flex-col flex justify-center items-center max-h-[170px] relative h-full w-full rounded-lg duration-300  hover:bg-[#464646] bg-searchText">
                      {!previewFileName && (
                        <div className="absolute pointer">
                          <UploadIcon />
                        </div>
                      )}
                      {typeof userData.preview === "object" && (
                        <div className="absolute pointer">
                          <span className="text-sideText text-center line-clamp-1 overflow-hidden w-[230px]">
                            {userData.preview.name}
                          </span>
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="addBtn text-white px-6 outline-none py-3 rounded-xl"
                >
                  Сохранить изменения
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditChannel;
