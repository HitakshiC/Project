import React from 'react';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted mt-5">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center text-white justify-content-lg p-4 border-bottom">
      
          <a href="" className="me-4 text-reset">
            <FaFacebookF size={30}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <FaInstagram size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <FaLinkedin size={30}/>
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub size={30}/>
          </a>
        
      </section>
      {/* Section: Social media */}

    
      {/* Copyright */}
      <div className="text-center text-lg font-weight-bold p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright EcoWheels. 
        <a className="text-reset text-lg fw-bold" href="https://mdbootstrap.com/">
        All rights reserved
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
