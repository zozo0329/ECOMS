import React from "react";
import { Link } from "react-router-dom";
export const ServicesColumn = () => (
  <div className="col-span-1 space-y-4">
    <h6 className="text-gray-900 font-semibold text-sm uppercase tracking-wider cursor-default">
      Services
    </h6>
    <ul className="space-y-3">
      <li>
        <Link
          to="branding"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Branding
        </Link>
      </li>
      <li>
        <Link
          to="design"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Design
        </Link>
      </li>
      <li>
        <Link
          to="marketing"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Marketing
        </Link>
      </li>
      <li>
        <Link
          to="advertisement"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Advertisement
        </Link>
      </li>
    </ul>
  </div>
);

export const CompanyColumn = () => (
  <div className="col-span-1 space-y-4">
    <h6 className="text-gray-900 font-semibold text-sm uppercase tracking-wider cursor-default">
      Company
    </h6>
    <ul className="space-y-3">
      <li>
        <Link
          to="aboutUs"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="careers"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Careers
        </Link>
      </li>
      <li>
        <Link
          to="pressKit"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Press Kit
        </Link>
      </li>
    </ul>
  </div>
);

export const LegalColumn = () => (
  <div className="col-span-1 space-y-4">
    <h6 className="text-gray-900 font-semibold text-sm uppercase tracking-wider cursor-default">
      Legal
    </h6>
    <ul className="space-y-3">
      <li>
        <Link
          to="termsOfService"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Terms of Service
        </Link>
      </li>
      <li>
        <Link
          to="privacyPolicy"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link
          to="cookiePolicy"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Cookie Policy
        </Link>
      </li>
      <li>
        <Link
          to="refundPolicy"
          className="text-sm text-gray-600 hover:underline cursor-pointer"
        >
          Refund Policy
        </Link>
      </li>
    </ul>
  </div>
);

const FooterItems = () => {
  return (
    <>
      <ServicesColumn />
      <CompanyColumn />
      <LegalColumn />
    </>
  );
};

export default FooterItems;
