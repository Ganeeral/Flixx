import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Видеохостинг - Flix",
  description: "Сайт видеохостинга Flix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white">
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  );
}
