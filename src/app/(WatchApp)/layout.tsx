"use client";

import HeaderWatch from "@/components/header/headerWatch";
import "@/app/globals.css";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const WatchLayout: React.FC<{
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
    <>
      <HeaderWatch />
      <div className="mt-[66px] flix:mt-[80px]">{children}</div>
    </>
  );
};

export default withAuth(WatchLayout);
