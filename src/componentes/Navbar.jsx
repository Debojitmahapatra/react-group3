import React,{useState} from 'react';
import logo from "../images/logo.png"
import {Link} from "react-scroll"
function Navbar() {
    const [nav,setnav]=useState(false)
    const changeBackground=()=>{
        if(window.scrollY>=50){
            setnav(true)
        }else {
            setnav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>

        </label>
        <ul className='menu' >
            <li><Link to='about' smooth={true} duration={1000}>about</Link></li> 
            <li><Link to='main'smooth={true} duration={1200}>home</Link></li>
            <li><Link to='offer'smooth={true} duration={1300}>pricing</Link></li>
            <li><Link to='features'smooth={true} duration={1400}>program</Link></li>
            <button><Link to='contact' smooth={true} duration={1600}> register now</Link></button>
        </ul>
    </nav>
  )
}

export default Navbar;
