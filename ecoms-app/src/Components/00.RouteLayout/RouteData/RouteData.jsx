import React from "react";
import NotificationMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/Notification/01.NotificationMain/NotificationMain";
import HelpMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/Help/01.HelpMain/HelpMain";
import SignInMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/SignIn/01.SignInMain/SignInMain";
import SignUpMain from "../../01.LandingPage/RoutesComponents/01.HeaderActions/SignUp/01.SignUpMain/SignUpMain";
import Branding from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Branding/Branding";
import Design from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Design/Design";
import Marketing from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Marketing/Marketing";
import Advertisement from "../../01.LandingPage/RoutesComponents/Footer/01.Services/Advertisement/Advertisement";
import AboutUs from "../../01.LandingPage/RoutesComponents/Footer/02.Company/01.AboutUs/AboutUs";
import Contact from "../../01.LandingPage/RoutesComponents/Footer/02.Company/02Contact/Contact";
import Careers from "../../01.LandingPage/RoutesComponents/Footer/02.Company/03Careers/Careers";
import PressKit from "../../01.LandingPage/RoutesComponents/Footer/02.Company/04PressKit/PressKit";
import TermsAndService from "../../01.LandingPage/RoutesComponents/Footer/03.Legal/01TermsAndService/TermsAndService";
import PrivacyPolicy from "../../01.LandingPage/RoutesComponents/Footer/03.Legal/02PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../../01.LandingPage/RoutesComponents/Footer/03.Legal/03CookiePolicy/CookiePolicy";
import RefundPolicy from "../../01.LandingPage/RoutesComponents/Footer/03.Legal/04RefundPolicy/RefundPolicy";
import Privacy from "../../01.LandingPage/RoutesComponents/Footer/04.BottomFooter/01Privacy/Privacy";
import Terms from "../../01.LandingPage/RoutesComponents/Footer/04.BottomFooter/02Terms/Terms";
import Cookies from "../../01.LandingPage/RoutesComponents/Footer/04.BottomFooter/03Cookies/Cookies";

export const headerRoutes = [
  { path: "/notification", element: <NotificationMain /> },
  { path: "/help", element: <HelpMain /> },
  { path: "/signUp", element: <SignUpMain /> },
  { path: "/signIn", element: <SignInMain /> },
];
export const servicesRoutes = [
  { path: "/branding", element: <Branding /> },
  { path: "/design", element: <Design /> },
  { path: "/marketing", element: <Marketing /> },
  { path: "/advertisement", element: <Advertisement /> },
];
export const companyRoutes = [
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/careers", element: <Careers /> },
  { path: "/pressKit", element: <PressKit /> },
];
export const legalRoutes = [
  { path: "/termsOfService", element: <TermsAndService /> },
  { path: "/privacyPolicy", element: <PrivacyPolicy /> },
  { path: "/cookiePolicy", element: <CookiePolicy /> },
  { path: "/refundPolicy", element: <RefundPolicy /> },
];
export const bottomFooterRoutes = [
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/cookies", element: <Cookies /> },
];
