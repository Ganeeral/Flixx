"use client";

import Header from "@/components/header/header";
import HeaderMobile from "@/components/header/headerMobile";
import "@/app/globals.css";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const Router = useRouter();
  useEffect(() => {
    const status = localStorage.getItem("status");

    if (status === "blocked") {
      Router.replace("/banned");
    }
  }, []);
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
