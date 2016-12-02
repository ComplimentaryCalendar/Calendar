import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Particles from '../../components/Particles'

export const CoreLayout = ({ children }) => (
  <div className='core-container'>
    {children}
    <Particles />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
