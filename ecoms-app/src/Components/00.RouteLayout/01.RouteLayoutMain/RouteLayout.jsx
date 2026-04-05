import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  headerRoutes,
  servicesRoutes,
  companyRoutes,
  legalRoutes,
} from "../RouteData/RouteData.jsx";
import LandingPage from "../../01.LandingPage/01.LandingPageMain/LandingPage";

const FormatedHeaderRoutes = headerRoutes.map((route, i) => (
  <Route key={route.path || i} path={route.path} element={route.element} />
));
const FormatedServiceRoutes = servicesRoutes.map((route, i) => (
  <Route key={route.path || i} path={route.path} element={route.element} />
));
const FormatedcompanyRoutes = companyRoutes.map((route, i) => (
  <Route key={route.path || i} path={route.path} element={route.element} />
));
const FormatedLegalRoutes = legalRoutes.map((route, i) => (
  <Route key={route.path || i} path={route.path} element={route.element} />
));
const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Header Route Format */}
      {FormatedHeaderRoutes}
      {/* Footer Route Format */}
      {FormatedServiceRoutes}
      {FormatedcompanyRoutes}
      {FormatedLegalRoutes}
    </Routes>
  );
};

export default RouteLayout;
