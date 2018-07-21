import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ siteTitle }) => (
  <div>
    <div className="line" />
    <div className="nav-wrapper">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  </div>
)

export default Nav
