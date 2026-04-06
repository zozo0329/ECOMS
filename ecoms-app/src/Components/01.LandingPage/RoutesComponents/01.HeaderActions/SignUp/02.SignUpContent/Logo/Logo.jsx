import React from "react";
import LogoIcon from "../../../../../../../Assets/Icons/storex_Logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-6">
      <Link to="/">
        <img
          src={LogoIcon}
          alt="STOREX LOGO"
          className="h-16 w-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Create your account
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Join STOREX and start shopping
        </p>
      </div>
    </div>
  );
};

export default Logo;
