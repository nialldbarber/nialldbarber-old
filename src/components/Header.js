import React from 'react'
import Link from 'gatsby-link'
import logo from '../pages/images/logo-inverse.svg'

const Header = ({ siteTitle }) => (
  <nav>
    <div className="logo">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  </nav>
)

export default Header
