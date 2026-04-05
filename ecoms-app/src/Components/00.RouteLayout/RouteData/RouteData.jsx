import React from "react";
import NotificationMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/Notification/01.NotificationMain/NotificationMain";
import HelpMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/Help/01.HelpMain/HelpMain";
import SignInMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/SignIn/01.SignInMain/SignInMain";
import SignUpMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/SignUp/01.SignUpMain/SignUpMain";
import Branding from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Branding/Branding";
import Design from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Design/Design";
import Marketing from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Marketing/Marketing";
import Advertisement from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Advertisement/Advertisement";

export const headerRoutes = [
  { path: "notification", element: <NotificationMain /> },
  { path: "help", element: <HelpMain /> },
  { path: "signUp", element: <SignUpMain /> },
  { path: "signIn", element: <SignInMain /> },
];
export const servicesRoutes = [
  { path: "branding", element: <Branding /> },
  { path: "design", element: <Design /> },
  { path: "marketing", element: <Marketing /> },
  { path: "advertisement", element: <Advertisement /> },
];
