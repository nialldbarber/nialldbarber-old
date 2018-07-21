import React from 'react'
import Link from 'gatsby-link'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const IndexPage = () => (
  <div>
    <div className="home">
      <h1>Niall Barber</h1>
      <Skills />
      <Contact />
    </div>
  </div>
)

export default IndexPage
