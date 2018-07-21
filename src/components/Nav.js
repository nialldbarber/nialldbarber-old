import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ siteTitle }) => (
  <div>
    <div className="line" />
    <div className="nav-wrapper">
      <Link
        exact
        to="/"
        activeStyle={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
        }}
      >
        Home
      </Link>
      <Link
        to="/About"
        activeStyle={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
        }}
      >
        About
      </Link>
      <Link
        to="/Contact"
        activeStyle={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
        }}
      >
        Contact
      </Link>
    </div>
  </div>
)

export default Nav
