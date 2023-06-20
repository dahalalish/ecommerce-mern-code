import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Rights Reserved &copy; Alish Dahal</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>
        <Link>|</Link>
        <Link to="/contact">Contact</Link>
        <Link>|</Link>
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
