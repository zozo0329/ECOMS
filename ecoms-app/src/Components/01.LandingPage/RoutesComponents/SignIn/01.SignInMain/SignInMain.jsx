import React from "react";
import ErrorPage from "../../../../UI/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";
const SignInMain = () => {
  return (
    <div>
      <Helmet>
        <title>STOREX | Login</title>
      </Helmet>
      <ErrorPage />
    </div>
  );
};

export default SignInMain;
