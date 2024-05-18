"use client"

import Header from "@/components/header/header";
import HeaderMobile from "@/components/header/headerMobile";
import "@/app/globals.css";
import withAuth from '@/hoc/withAuth';

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div id="page">
      <HeaderMobile />
      <Header />
      <div className="tablet-s:ml-[84px] mt-[80px] flex-grow">{children}</div>
    </div>
  );
};

MainLayout.displayName = "MainLayout";

export default withAuth(MainLayout);
