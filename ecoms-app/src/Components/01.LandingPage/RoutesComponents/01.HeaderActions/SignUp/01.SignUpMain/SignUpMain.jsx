import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../02.SignUpContent/Logo/Logo";
import SignUpForm from "../02.SignUpContent/SignUpForm/SignUpForm";

const SignUpMain = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <title>STOREX | Sign Up</title>
      </Helmet>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <Logo />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpMain;
