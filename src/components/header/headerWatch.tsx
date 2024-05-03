import React from "react";
import SideBarWatch from "@/components/sidebar/sidebarWatch";
import SearchBar from "../searchbar/search";
import HeaderLinks from "../headerLinks/headerLinks";
import cn from "classnames";

const HeaderMobile = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-20 pb-3 flix:pb-0">
        <div className="flex justify-between">
          <div className="max-w-[248px] w-full">
            <SideBarWatch />
          </div>
          <div
            className={cn(
              "flex items-center mt-[18px]",
              "tablet-s:items-start tablet-s:mt-[0px] tablet-s:flex-grow tablet-s:justify-between tablet-s:w-full"
            )}
          >
            <div className="flex-grow flex justify-center">
              <div className="flex-grow contents text-center">
                <SearchBar />
              </div>
            </div>
            <div className="tablet-s:mt-[18px] tablet-s:mr-[30px] mr-[8px] ml-[20px] tablet-s:ml-[56px]">
              <HeaderLinks />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
