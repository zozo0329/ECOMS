import React from "react";
import Navbar from "../LandingPageContent/Nav/01.NavMain/Navbar";
import ShowcaseMain from "../LandingPageContent/Showcase/01.SowcaseMain/ShowcaseMain";
import FooterMain from "../LandingPageContent/Footer/01.FooterMain/FooterMain";
import { Helmet } from "react-helmet";
const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>STOREX</title>
      </Helmet>
      <Navbar />
      <div className="pt-23.5">
        <ShowcaseMain />
        <FooterMain />
      </div>
    </div>
  );
};

export default LandingPage;
