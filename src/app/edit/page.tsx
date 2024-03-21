"use client";

import React, { useState, useEffect } from "react";
import { UploadIcon } from "@/ui/icons/index";
import { useRouter } from "next/router";

interface FormData {
  videoId: string;
  title: string;
  description: string;
  preview: File | string;
  video: File | string;
}

function Edit() {
  const router = useRouter();
  const { videoId } = router.query;
  const [formData, setFormData] = useState<FormData>({
    videoId: videoId as string, // Идентификатор редактируемого видео
    title: "",
    description: "",
    preview: "",
    video: "",
  });


  const [previewFileName, setPreviewFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Здесь можно загрузить данные о редактируемом видео из API и установить их в состояние формы
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `http://Flixx/src/api/editVideo.php?id=${formData.videoId}`
        );
        const data = await response.json();
        setFormData({
          ...formData,
          title: data.title,
          description: data.description,
          preview: data.preview,
          video: data.video,
        });
      } catch (error) {
        console.error("Ошибка при загрузке данных о видео:", error);
      }
    };
    fetchVideoData();
  }, [formData.videoId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (
      e.target instanceof HTMLInputElement &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      if (name === "preview") {
        setPreviewFileName(e.target.files[0].name);
        setFormData({
          ...formData,
          preview: e.target.files[0],
        });
      } else if (name === "video") {
        setVideoFileName(e.target.files[0].name);
        setFormData({
          ...formData,
          video: e.target.files[0],
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("videoId", formData.videoId);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("preview", formData.preview);
      formDataToSend.append("video", formData.video);
      const response = await fetch("http://Flixx/src/api/editVideo.php", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          window.location.reload();
        }, 3000);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <div className="m-3">
      <h1 className="textGradient mt-[50px] tablet:ml-[60px] text-2xl font-bold mb-4">
        Редактировать видео
      </h1>
      <div className="flex flex-col justify-center items-center">
        {showSuccessMessage && (
          <div className="bg-green-200 text-green-800 rounded-md p-3 mb-3">
            Видео успешно обновлено!
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="flex justify-center gap-y-7 flix:gap-y-0 flex-col max-w-[860px] w-full"
          >
            {/* Добавлено поле для ввода идентификатора редактируемого видео */}
            <input
              type="hidden"
              name="videoId"
              value={formData.videoId}
              onChange={handleChange}
            />
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
                    value={formData.title}
                    onChange={handleChange}
                    className="bg-inherit pl-[14px] pr-[45px] pt-[13px] pb-[8px] rounded-lg outline-none text-[#8A8A8A]"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="mb-4">
                  <label htmlFor="preview" className="text-base text-gray-text">
                    Загрузка превью
                  </label>
                  {/* Добавлен код для отображения имени загружаемого файла */}
                  <div className="max-w-[270px] mt-[10px] cursor-pointer flex-col flex justify-center items-center max-h-[84px] relative h-full w-full rounded-lg duration-300  hover:bg-[#e7e7e7] bg-[#F5F5F5]">
                    {!previewFileName && (
                      <div className="absolute pointer">
                        <UploadIcon />
                      </div>
                    )}
                    {typeof formData.preview === "object" && (
                      <div className="absolute pointer">
                        {formData.preview.name}
                      </div>
                    )}
                    <input
                      type="file"
                      id="preview"
                      name="preview"
                      onChange={handleChange}
                      accept="image/*"
                      className="bg-inherit py-[16px] cursor-pointer opacity-0 flex rounded-lg outline-none w-full"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="preview" className="text-base text-gray-text">
                    Загрузка видео
                  </label>
                  {/* Добавлен код для отображения имени загружаемого файла */}
                  <div className="max-w-[270px] mt-[10px] cursor-pointer flex-col flex justify-center items-center max-h-[84px] relative h-full w-full rounded-lg duration-300  hover:bg-[#e77e7e7]  bg-[#F5F5F5]">
                    {!videoFileName && (
                      <div className="absolute pointer">
                        <UploadIcon />
                      </div>
                    )}
                    {typeof formData.video === "object" && (
                      <div className="absolute pointer">
                        {formData.video.name}
                      </div>
                    )}
                    <input
                      type="file"
                      id="video"
                      name="video"
                      onChange={handleChange}
                      accept="video/*"
                      className="bg-inherit py-[16px] cursor-pointer opacity-0 flex rounded-lg outline-none w-full"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <label htmlFor="description" className="text-base text-gray-text">
                Описание
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="rounded-lg px-[17px] text-gray-text py-[13px] outline-none bg-[#F5F5F5] h-[176px] w-full"
                placeholder="Введите описание видео"
                required
              />
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
  );
}

export default Edit;
