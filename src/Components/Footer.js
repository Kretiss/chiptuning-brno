import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {

  return(
    <footer role="contentinfo">
      <div className="container">
        <NavLink to="/Cookies">Cookies</NavLink>
        <p>&copy; 2021 chiptuning-brno.cz</p>
      </div>
    </footer>
  );

}

export default Footer;
