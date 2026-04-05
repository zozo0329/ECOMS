import React from "react";
import ErrorPage from "../../../../../UI/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";
const RefundPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>STOREX | Refund Policy</title>
      </Helmet>
      <ErrorPage />
    </div>
  );
};

export default RefundPolicy;
