import React from "react";
import SideBarMobile from "@/components/sidebar/sidebarMobile";
import SearchBar from "../searchbar/search";
import HeaderLinks from "../headerLinks/headerLinks";

const HeaderMobile = () => {
  return (
    <>
      <header className="fixed tablet-s:hidden top-0 w-full bg-white z-20">
        <div className="flex justify-between">
          <div>
            <SideBarMobile />
          </div>
          <div className="flex items-center py-4 px-4 gap-5">
            <SearchBar />
            <HeaderLinks />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
