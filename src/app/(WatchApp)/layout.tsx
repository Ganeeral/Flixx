"use client"

import HeaderWatch from "@/components/header/headerWatch";
import "@/app/globals.css";
import withAuth from '@/hoc/withAuth';


const WatchLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <HeaderWatch />
      <div className="mt-[66px] flix:mt-[80px]">{children}</div>
    </>
  
  );
}

export default withAuth(WatchLayout);
