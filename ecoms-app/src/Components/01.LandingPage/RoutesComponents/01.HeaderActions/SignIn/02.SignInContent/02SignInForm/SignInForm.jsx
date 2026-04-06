import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="w-full max-w-md">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example123@gmail.com"
            className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
        >
          Login
        </button>
        <p className="text-xs text-center text-gray-500 cursor-default">
          Don't have an account?
          <Link
            to="/signup"
            className="text-gray-700 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
