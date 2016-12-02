import React from 'react'
import particleConfig from './particlesConfig'
// import './Particles.scss'
import '../../../node_modules/particles.js/particles'

class Particles extends React.Component {
  componentDidMount () {
    window.particlesJS('particles', particleConfig)
  }

  render () {
    return (
      <div id='particles' />
    )
  }
}

export default Particles
