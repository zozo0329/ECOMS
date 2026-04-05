import React from "react";
import NotificationMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/Notification/01.NotificationMain/NotificationMain";
import HelpMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/Help/01.HelpMain/HelpMain";
import SignInMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/SignIn/01.SignInMain/SignInMain";
import SignUpMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/SignUp/01.SignUpMain/SignUpMain";

export const headerRoutes = [
  { path: "notification", element: <NotificationMain /> },
  { path: "help", element: <HelpMain /> },
  { path: "signUp", element: <SignUpMain /> },
  { path: "signIn", element: <SignInMain /> },
];
