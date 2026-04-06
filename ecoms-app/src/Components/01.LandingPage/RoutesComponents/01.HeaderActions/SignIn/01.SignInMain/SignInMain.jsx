import React from "react";
import { Helmet } from "react-helmet";
import SignInLogo from "../02.SignInContent/01SignInLogo/SignInLogo";
import SignInForm from "../02.SignInContent/02SignInForm/SignInForm";

const SignInMain = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <title>STOREX | Login</title>
      </Helmet>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <SignInLogo />
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInMain;
