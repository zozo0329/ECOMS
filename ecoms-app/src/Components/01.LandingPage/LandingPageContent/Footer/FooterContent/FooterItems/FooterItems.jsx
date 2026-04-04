import React from "react";

export const ServicesColumn = () => (
  <div className="col-span-1 space-y-4">
    <h6 className="text-gray-900 font-semibold text-sm uppercase tracking-wider cursor-default">
      Services
    </h6>
    <ul className="space-y-3">
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Branding</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Design</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Marketing</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Advertisement</a></li>
    </ul>
  </div>
);

export const CompanyColumn = () => (
  <div className="col-span-1 space-y-4">
    <h6 className="text-gray-900 font-semibold text-sm uppercase tracking-wider cursor-default">
      Company
    </h6>
    <ul className="space-y-3">
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">About Us</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Contact</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Careers</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Press Kit</a></li>
    </ul>
  </div>
);

export const LegalColumn = () => (
  <div className="col-span-1 space-y-4">
    <h6 className="text-gray-900 font-semibold text-sm uppercase tracking-wider cursor-default">
      Legal
    </h6>
    <ul className="space-y-3">
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Terms of Service</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Privacy Policy</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Cookie Policy</a></li>
      <li><a href="#" className="text-sm text-gray-600 hover:underline cursor-pointer">Refund Policy</a></li>
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