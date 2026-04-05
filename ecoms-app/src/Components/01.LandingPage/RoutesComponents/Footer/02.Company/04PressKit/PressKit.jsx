import React from "react";
import ErrorPage from "../../../../../UI/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";
const PressKit = () => {
  return (
    <div>
      <Helmet>
        <title>STOREX | Press Kit</title>
      </Helmet>
      <ErrorPage />
    </div>
  );
};

export default PressKit;
