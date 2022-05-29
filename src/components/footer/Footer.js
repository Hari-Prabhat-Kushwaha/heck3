import React from 'react';
import "./Footer.css"
const Footer = () => {
    const year=new Date().getFullYear();
    return (
        <footer>
        <div className="wrapper">
          <small>COPYRIGHT&copy; <strong>SHOPLIST</strong>, All Rights Reserved</small>
        </div>
      </footer>
    );
};

export default Footer;