import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Видеохостинг - Flix",
  description: "Сайт видеохостинга Flix",
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
      <body className="background__main">
        <div className="flex grow">{children}</div>
      </body>
    </html>
  );
}
