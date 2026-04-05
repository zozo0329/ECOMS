import React from "react";
import { Link } from "react-router-dom";
const BottomFooter = () => {
  return (
    <>
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 cursor-default">
              © {new Date().getFullYear()} STOREX. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-700 hover:underline transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-700 hover:underline  transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-700 hover:underline transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
