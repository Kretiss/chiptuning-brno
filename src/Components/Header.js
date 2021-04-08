import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

import Logo from "../images/Quantum-chiptuning-logo.png";
import AutoSlavkovLogo from "../images/auto-slavkov.png";

const Header = () => {

  const [isToggled, toggleMenu] = useState(false);
  const menuEffect = useSpring({
    opacity: isToggled ? 1 : .85,
    height: isToggled ? "50vh" : "0vh",
  });

  return(
    <header role="banner">
      <div className="container">
        <NavLink exact to="/" className="logo"><img src={ Logo } alt="logo" /></NavLink>
        <div className={`navButton ${isToggled ? "active" : "" }`} onClick={ () => toggleMenu(!isToggled)} ><div className="navButtonHamburger"></div></div>
        <animated.nav style={menuEffect}>
          <ul>
            <li><NavLink exact to="/" onClick={ () => toggleMenu(false)}>ÚVOD</NavLink></li>
            <li><a href="https://www.quantumchiptuning.cz/kontakt" target="_blank" rel="noreferrer" onClick={ () => toggleMenu(false)}>KONTAKT <i className="fas fa-external-link-alt"></i></a></li>
          </ul>
          <a href="https://www.autoslavkov.cz" className="menuSecondLogo" target="_blank" rel="noreferrer" onClick={ () => toggleMenu(false)}><img src={ AutoSlavkovLogo } alt="AutoSlavkov Logo" /></a>
        </animated.nav>
      </div>
    </header>
  );
}

export default Header;
