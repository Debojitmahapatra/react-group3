/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from "react-scroll"
function Header() {
  return (
    <div id='main'>
      <div className='name'>
        <h2>MAKE YOU A</h2>
        <h1><span>BODY BILDER</span></h1>
        <p className='details'>If you want something you’ve never had, you must be willing to do something you’ve never done.The body achieves what the mind believes</p>
        <div className='header-btns'>
        <Link to='contact' smooth={true} duration={1500}>
        <a href='#'className='header-btn'>Signup Now</a>
      </Link>
        
        {/* <a href='#'className='header-btn2'>View Details</a> */}
        </div>
      </div>
    </div>
  )
}

export default Header
