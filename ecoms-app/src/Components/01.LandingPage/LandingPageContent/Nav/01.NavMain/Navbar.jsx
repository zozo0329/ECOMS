import React from "react";
import NavActions from "../NavActions/NavActions";
import BottomNavbar from "../NavActions/BottomNavbar";

const Navbar = () => {
  return (
    <div className="bg-[#e7e7e7]">
      <NavActions />
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
