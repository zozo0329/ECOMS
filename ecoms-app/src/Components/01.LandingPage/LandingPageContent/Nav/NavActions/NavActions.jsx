import React from "react";
import NotificationsIcon from "../../../../../Assets/Icons/Notification.png";
import HelpIcon from "../../../../../Assets/Icons/Help_Icon.png";
import { Link } from "react-router-dom";
const NavActions = () => {
  return (
    <>
      <nav className="bg-[#cecece]">
        <ul className="flex flex-row gap-3 md:gap-5 items-center justify-end px-4 md:pr-10 md:pl-10 text-xs md:text-base">
          <a
            href=""
            className="flex items-center gap-1 hover:opacity-60 transition-all duration-300"
          >
            <span>
              <img
                src={NotificationsIcon}
                alt="Notification Icon"
                className="h-4 md:h-5 w-4 md:w-5"
              />
            </span>
            <li className="hidden sm:block">Notifications</li>
          </a>
          <p className="text-[#acacac] hidden sm:block">|</p>
          <a
            href=""
            className="flex items-center gap-1 hover:opacity-60 transition-all duration-300"
          >
            <span>
              <img
                src={HelpIcon}
                alt="Help Icon"
                className="h-4 md:h-5 w-4 md:w-5"
              />
            </span>
            <li className="hidden sm:block">Help</li>
          </a>
          <p className="text-[#acacac] hidden sm:block">|</p>
          <Link
            to="signUp"
            className="hover:opacity-60 transition-all duration-300"
          >
            <li>Sign Up</li>
          </Link>
          <p className="text-[#acacac]">|</p>
          <Link
            to="signIn"
            className="hover:opacity-60 transition-all duration-300"
          >
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavActions;
