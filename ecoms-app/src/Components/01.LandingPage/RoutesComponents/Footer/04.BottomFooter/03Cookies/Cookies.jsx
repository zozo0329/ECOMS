import React from "react";
import ErrorPage from "../../../../../UI/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";
const Cookies = () => {
  return (
    <div>
      <Helmet>
        <title>STOREX | Cookies</title>
      </Helmet>
      <ErrorPage />
    </div>
  );
};

export default Cookies;
