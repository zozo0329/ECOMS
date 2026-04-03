import React from "react";
import NotificationsIcon from "../../../../../Assets/Icons/Notification.png";
import HelpIcon from "../../../../../Assets/Icons/Help_Icon.png";
const NavActions = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-5 items-center justify-end pr-10 pl-10">
          <a href="" className="flex items-center gap-1">
            <span>
              <img
                src={NotificationsIcon}
                alt="Notification Icon"
                className="h-5 w-5"
              />
            </span>
            <li>Notifications</li>
          </a>
          <p>|</p>
          <a href="" className="flex items-center gap-1">
            <span>
              <img src={HelpIcon} alt="Help Icon" className="h-5 w-5" />
            </span>
            <li>Help</li>
          </a>
          <p>|</p>
          <a href="">
            <li>Sign Up</li>
          </a>
          <p>|</p>
          <a href="">
            <li>Login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavActions;
