import React, { useState } from "react";
import Link from "next/link";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-[36px] h-[36px] rounded-full flex justify-center items-center text-white bg-[#323132]"
      >
        A
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 right-[2px] rounded-md shadow-lg blurBg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              onClick={toggleDropdown}
              className="block px-4 py-2 text-sm hover:bg-activeDrop"
              href="/channel"
            >
              <p className="textGradient">Канал</p>
            </Link>
            <Link
              onClick={toggleDropdown}
              className="block px-4 py-2 text-sm hover:bg-activeDrop"
              href="/channel/edit"
            >
              <p className="textGradient">Ред. канал</p>
            </Link>
            <Link
              onClick={toggleDropdown}
              className="block px-4 py-2 text-sm hover:bg-activeDrop"
              href="/subscriptions"
            >
              <p className="textGradient">Подписки</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
