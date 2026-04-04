import React from "react";
import Navbar from "../LandingPageContent/Nav/01.NavMain/Navbar";
import ShowcaseMain from "../LandingPageContent/Showcase/01.SowcaseMain/ShowcaseMain";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-23.5">
        <ShowcaseMain />
      </div>
    </div>
  );
};

export default LandingPage;
