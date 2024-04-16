import HeaderWatch from "@/components/header/headerWatch";
export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white">
        <div className="flex h-full w-full">
          <div id="page">
            <HeaderWatch />
            <div className="mt-[80px]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
