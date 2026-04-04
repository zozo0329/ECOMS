import React, { useEffect, useState } from "react";
import NavActions from "../NavActions/NavActions";
import BottomNavbar from "../NavActions/BottomNavbar";

const Navbar = () => {
  const [showTopNav, setShowTopNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowTopNav(true);
      } else if (currentScrollY > 50) {
        setShowTopNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`bg-[#cecece] transition-all duration-300 overflow-hidden ${
          showTopNav ? "max-h-8.5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <NavActions />
      </div>
      <div className="bg-[#e7e7e7] shadow-md">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Navbar;
