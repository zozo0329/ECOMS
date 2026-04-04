import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../01.LandingPage/01.LandingPageMain/LandingPage";
import NotificationMain from "../01.LandingPage/RoutesComponents/Notification/01.NotificationMain/NotificationMain";
import HelpMain from "../01.LandingPage/RoutesComponents/Help/01.HelpMain/HelpMain";
import SignUpMain from "../01.LandingPage/RoutesComponents/SignUp/01.SignUpMain/SignUpMain";
import SignInMain from "../01.LandingPage/RoutesComponents/SignIn/01.SignInMain/SignInMain";
const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/notification" element={<NotificationMain />} />
      <Route path="/help" element={<HelpMain />} />
      <Route path="/signUp" element={<SignUpMain />} />
      <Route path="/signIn" element={<SignInMain />} />
    </Routes>
  );
};

export default RouteLayout;
