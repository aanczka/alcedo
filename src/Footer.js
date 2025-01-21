// Footer.js
import React from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <div className="footer-content">
          <h5 className="footer-heading">Contact Us</h5>
          <p className="footer-text">
            <FaPhone className="footer-icon" /> Phone: <span className="placeholder"></span>
          </p>
          <p className="footer-text">
            <FaEnvelope className="footer-icon" /> Email: <span className="placeholder"></span>
          </p>
        </div>
        <div className="social-media">
          <h6 className="social-heading">Follow Us</h6>
          <a href="#" className="social-icon-link"><FaFacebook className="social-icon" /></a>
          <a href="#" className="social-icon-link"><FaTwitter className="social-icon" /></a>
          <a href="#" className="social-icon-link"><FaInstagram className="social-icon" /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ALCEDO Adult Education Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

 
  