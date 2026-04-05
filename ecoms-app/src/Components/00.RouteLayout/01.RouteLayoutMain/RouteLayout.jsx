import React from "react";
import { Routes, Route } from "react-router-dom";
import { headerRoutes } from "../RouteData/RouteData.jsx";
import LandingPage from "../../01.LandingPage/01.LandingPageMain/LandingPage";

//

const RouteLayout = () => {
  console.log(headerRoutes, "HEADER ROUTE");
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {headerRoutes.map((route, i) => (
        <Route
          key={route.path || i}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default RouteLayout;
