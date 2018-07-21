import React, { Component } from 'react'
import Typed from 'react-typed'

export default class Skills extends Component {
  render() {
    return (
      <div className="typed">
        <Typed
          strings={[
            'HTML / CSS',
            'JavaScript',
            'React',
            'PHP',
            'WordPress',
            'Liquid',
            'Photoshop',
            'Illustrator',
            'After Effects',
            'test',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    )
  }
}
