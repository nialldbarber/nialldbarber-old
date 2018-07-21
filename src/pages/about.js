import React from 'react'
import Link from 'gatsby-link'
import Particles from 'reactparticles.js'

const AboutPage = () => (
  <div>
    <Particles id="tile-4-particles" config="particles/test-particles.json" />
    <div className="content home">
      <h1>About</h1>
      <p>Hi, I'm a front end developer based in London</p>
      <p>
        I make slick, fast websites using technologies like React, WordPress and
        Shopify
      </p>
      <p>Let's make something cool together!</p>
    </div>
  </div>
)

export default AboutPage
