import React from "react";
import Logo from "../../../../../../Assets/Icons/storex_Logo.png";
const Platform = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="STOREX LOGO"
            className="w-15 h-15 object-contain"
          />
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight cursor-default">
            STOREX
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-500 cursor-default">
          Your trusted destination for premium products and exceptional shopping
          experiences.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Platform;
