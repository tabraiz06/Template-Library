import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 mt-auto">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          &copy; 2024 Template Library. All rights reserved.
        </p>
        <div className="space-x-2">
          <a href="/" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
