import Header from "@/components/header/header";
import HeaderMobile from "@/components/header/headerMobile";
import "@/app/globals.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="page">
      <HeaderMobile />
      <Header />
      <div className="tablet-s:ml-[84px] mt-[80px]">{children}</div>
    </div>
  );
}
