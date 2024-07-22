import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-500 px-12 py-4 text-white w-full gap-y-10 border-t-border">
      <p>
        Copyright © {new Date().getFullYear()} Uni Ladder Consultancy. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
