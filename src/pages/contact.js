import React from 'react'
import Link from 'gatsby-link'
import Contact from '../components/Contact'
import Particles from 'reactparticles.js'

const ContactPage = () => (
  <div>
    <Particles id="tile-4-particles" config="particles/test-particles.json" />
    <div className="content home">
      <h1>Contact</h1>
      <Contact />
    </div>
  </div>
)

export default ContactPage
