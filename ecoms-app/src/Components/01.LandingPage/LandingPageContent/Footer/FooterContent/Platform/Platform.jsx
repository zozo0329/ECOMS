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
            aria-label="Twitter"
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
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
            aria-label="GitHub"
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-1 1.5C14.5 2 12 4 12 4c-2 0-3.5-1.5-4.5-2.5S6 2 6 2c-.5 1.5-.5 2.5-.5 3.5 0 4 3.5 6 6.5 6v4" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Platform;
