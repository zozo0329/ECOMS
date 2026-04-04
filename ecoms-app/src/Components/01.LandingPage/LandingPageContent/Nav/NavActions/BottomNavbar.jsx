import React from "react";
import StoreXLogo from "../../../../../Assets/Icons/storex_Logo.png";
import SearchIcon from "../../../../../Assets/Icons/searchIcon.png";
import CartIcon from "../../../../../Assets/Icons/cartIcon.png";
const BottomNavbar = () => {
  return (
    <div className="flex items-center justify-between shadow-md h-14 md:h-16 px-4 md:px-10 bg-[#e7e7e7]">
      <div className="flex items-center cursor-default">
        <img
          src={StoreXLogo}
          alt="StoreX Logo"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <h1 className="text-xl md:text-3xl font-semibold">STOREX</h1>
      </div>
      <div className="flex items-center gap-2 md:mr-10">
        <div className="hidden md:flex items-center border rounded-full px-2 py-2 w-40 bg-white">
          <img src={SearchIcon} alt="Search" className="h-4 w-4 opacity-50" />

          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full text-sm outline-none bg-transparent placeholder-gray-400"
          />
        </div>
        <div>
          <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 cursor-pointer">
            <img src={CartIcon} alt="Cart" className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[#00000088] text-white text-xs font-bold rounded-full">
              0
            </span>
          </button>
        </div>
        <button className="md:hidden p-2">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
