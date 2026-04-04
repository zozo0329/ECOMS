import React from "react";
import Platform from "../Platform/Platform";
import FooterItems from "../FooterItems/FooterItems";
import BottomFooter from "../BottomFooter/BottomFooter";

const FooterContent = () => {
  return (
    <footer className="bg-gray-200 text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Platform />
          </div>

          {/* Services, Company, Legal Columns */}
          <FooterItems />
        </div>
      </div>

      {/* Bottom Navbar */}
      <BottomFooter />
    </footer>
  );
};

export default FooterContent;
