import type { Metadata } from "next";
import "@/app/globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Видеохостинг - Flix",
  description: "Сайт Flix - ваш источник для стриминга видео онлайн.",
  icons: {
    icon: {
      url: "../faviconWhite.svg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-background">
        <div className="flex grow h-full">{children}</div>
      </body>
    </html>
  );
}
