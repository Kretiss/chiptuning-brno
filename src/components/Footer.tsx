import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="container">
        <NavLink to="/cookies">Cookies</NavLink>
        <p>
          &copy; 2021 chiptuning-brno.cz | vytvořilo{' '}
          <a
            href="https://www.tekastudio.cz/"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-block' }}
          >
            tekastudio.cz
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
