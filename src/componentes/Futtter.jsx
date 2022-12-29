import React from 'react'
// import { FaBeer } from 'react-icons/fa';
import Logo from './Logo'
import ima1 from '../images/1.logo.webp'
import ima2 from '../images/2.logo.jpg'
import ima3 from '../images/3.logo.jpg'
import ima4  from '../images/4.logo.webp'

function Futtter() {
  return (
    <div id='footer'>
      <div className='footer-logo'>
        <h1>FOLLOW<span>US</span></h1>
        <div  className='social-icon'>
        <Logo image={ima1} title="facebook"/>
        <Logo image={ima2} title="insta"/>
        <Logo image={ima3} title="twitter"/>
        <Logo image={ima4} title="youtube"/>
        </div>
      </div>
    </div>
  )
}

export default Futtter
