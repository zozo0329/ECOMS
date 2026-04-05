import React from "react";

import { Helmet } from "react-helmet";
import ErrorPage from "../../../../../UI/ErrorPage/ErrorPage";
const HelpMain = () => {
  return (
    <div>
      <Helmet>
        <title>STOREX | Help</title>
      </Helmet>
      <ErrorPage />
    </div>
  );
};

export default HelpMain;
