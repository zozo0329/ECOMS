import React from "react";
import StoreXLogo from "../../../../../Assets/Icons/storex_Logo.png";
import SearchIcon from "../../../../../Assets/Icons/searchIcon.png";
import CartIcon from "../../../../../Assets/Icons/cartIcon.png";
const BottomNavbar = () => {
  return (
    <div className="flex items-center justify-between shadow-md h-16 px-10 bg-[#e7e7e7]">
      <div className="flex items-center cursor-default">
        <img src={StoreXLogo} alt="StoreX Logo" className="h-25 w-25" />
        <h1 className="text-3xl font-semibold">STOREX</h1>
      </div>
      <div className="flex item-center gap-2 mr-10">
        <div className="flex items-center border rounded-full px-2 py-2 w-40 bg-white">
          <img src={SearchIcon} alt="Search" className="h-4 w-4 opacity-50" />

          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full text-sm outline-none bg-transparent placeholder-gray-400"
          />
        </div>
        <div>
          <button className="flex items-center gap-1 border rounded-full px-2 py-2 cursor-pointer bg-white hover:bg-gray-200 transition-all duration-300">
            <img src={CartIcon} alt="Cart" className="h-5 w-5" />
            <span className="text-sm">0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
