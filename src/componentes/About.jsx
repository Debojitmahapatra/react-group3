import React from 'react'
import aboutImage from "../images/about.png"
import {Link} from "react-scroll"
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutImage} alt=''/>
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>We can help you reach your potential each day. Sure, they're just words. But they're positive words. And if you're on the verge of giving up or struggling to push yourself to the next level, sometimes that's just what you need.</p>
        <button><Link to='price'smooth={true} duration={1300}>READ MORE</Link></button>
      </div>
    </div>
  )
}

export default About
