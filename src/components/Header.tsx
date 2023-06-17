import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/images/Quantum-chiptuning-logo.png'
import AutoSlavkovLogo from '../assets/images/auto-slavkov.png'

const Header = () => {
  const node = useRef<HTMLElement>(null)
  const [isToggled, toggleMenu] = useState(false)
  const menuEffect = useSpring({
    from: { opacity: 0, height: '0vh' },
    to: {
      opacity: isToggled ? 1 : 0.85,
      height: isToggled ? '50vh' : '0vh',
    },
  })

  const handleClick = (e: Event) => {
    const click = e.target as HTMLElement
    if (node.current?.contains(click)) {
      // inside click
      return
    }
    // outside click
    toggleMenu(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(() => {
    if (isToggled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isToggled])

  return (
    <header role="banner" ref={node}>
      <div className="container">
        <NavLink to="/" className="logo" onClick={() => toggleMenu(false)}>
          <img src={Logo} alt="logo" />
        </NavLink>

        <button
          type="button"
          className={`navButton ${isToggled ? 'active' : ''}`}
          onClick={() => toggleMenu(!isToggled)}
        >
          <div className="navButtonHamburger" />
        </button>

        <animated.nav style={menuEffect}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => toggleMenu(false)}>
                ÚVOD
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.quantumchiptuning.cz/kontakt"
                target="_blank"
                rel="noreferrer"
                onClick={() => toggleMenu(false)}
              >
                KONTAKT&nbsp;&nbsp;
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </li>
          </ul>
          <a
            href="https://www.autoslavkov.cz"
            className="menuSecondLogo"
            target="_blank"
            rel="noreferrer"
            onClick={() => toggleMenu(false)}
          >
            <img src={AutoSlavkovLogo} alt="AutoSlavkov Logo" />
          </a>
        </animated.nav>
      </div>
    </header>
  )
}

export default Header
