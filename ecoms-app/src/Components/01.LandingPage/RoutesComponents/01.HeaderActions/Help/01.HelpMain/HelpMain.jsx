import React from "react";
import ErrorPage from "../../../../../../../../UI/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";
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
