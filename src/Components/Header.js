import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

import Logo from "../images/Quantum-chiptuning-logo.png";
import AutoSlavkovLogo from "../images/auto-slavkov.png";

const Header = () => {

  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    toggleMenu(false);
  };

  const [isToggled, toggleMenu] = useState(false);
  const menuEffect = useSpring({
    from: {opacity: 0, height: "0vh"},
    to: {
      opacity: isToggled ? 1 : .85,
      height: isToggled ? "50vh" : "0vh",
    },
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    isToggled ? document.body.style.overflow = 'hidden'
              : document.body.style.overflow = 'unset'

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isToggled]);

  return(
    <header role="banner" ref={node}>

      <div className="container">

        <NavLink exact to="/" className="logo" onClick={ () => toggleMenu(false)}><img src={ Logo } alt="logo" /></NavLink>

        <div
          className={`navButton ${isToggled ? "active" : "" }`}
          onClick={ () => toggleMenu(!isToggled)}
        >
          <div className="navButtonHamburger">
          </div>

        </div>

        <animated.nav style={menuEffect}>
          <ul>
            <li><NavLink exact to="/" onClick={ () => toggleMenu(false)}>ÚVOD</NavLink></li>
            <li><a href="https://www.quantumchiptuning.cz/kontakt" target="_blank" rel="noreferrer" onClick={ () => toggleMenu(false)}>KONTAKT&nbsp;&nbsp;<i className="fas fa-external-link-alt"></i></a></li>
          </ul>
          <a href="https://www.autoslavkov.cz" className="menuSecondLogo" target="_blank" rel="noreferrer" onClick={ () => toggleMenu(false)}><img src={ AutoSlavkovLogo } alt="AutoSlavkov Logo" /></a>
        </animated.nav>

      </div>

    </header>
  );
}

export default Header;
