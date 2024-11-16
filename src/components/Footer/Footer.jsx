import React from 'react';
import './Footer.css';
import sahan from '../../assets/sahan.png';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <img src={sahan} alt="Footer Logo" className="footer-logo" />
            <p>I'm a Full Stack Developer.<br /> Let's build something amazing together!</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nisura-sahan-4b167a2aa" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/nisura_sahan/profilecard/?igsh=cjA2NndvYm5zNnBt" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/nisura.sahan?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2024 Nisura Sahan. All rights reserved.</p>
          <div className="footer-links">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;