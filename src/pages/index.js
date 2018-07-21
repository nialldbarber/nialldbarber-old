import React from 'react'
import Link from 'gatsby-link'
import Skills from '../components/Skills'
import Particles from 'reactparticles.js'

const IndexPage = () => (
  <div>
    <Particles id="tile-4-particles" config="particles/test-particles.json" />
    <div className="home">
      <h1>Niall Barber</h1>
      <Skills />
    </div>
  </div>
)

export default IndexPage
