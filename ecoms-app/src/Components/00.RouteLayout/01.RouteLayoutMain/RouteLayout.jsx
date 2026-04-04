import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../01.LandingPage/01.LandingPageMain/LandingPage";
import { headerRoutes } from "../RouteData/RouteData.jsx";

//

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {headerRoutes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouteLayout;
