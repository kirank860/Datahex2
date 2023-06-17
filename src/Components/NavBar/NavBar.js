import React, { useState } from 'react'
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
   const [isMobile,setIsMobile]=useState(false);
  return (
   <div id='to-top'>
   <nav className="navbar">
     <div>
      <img className='logo'src="https://datahex.in/wp-content/uploads/2023/04/DataNex_Logo1-768x85-1-1.png" alt="" />
     </div>
     <ul className={isMobile? "nav-links-mobile": "nav-links"} onClick={()=>setIsMobile(false)}>
      <li><a href="#nav-section" className='home'>Home</a></li>
      <hr />
      <li><a href="#about-section" className='about'>About Us</a></li>
      <hr />
      <li><a href="#design-section" className='project'>Our Projects</a></li>
      <hr />
      <li><a href="#please-contact" className='contact'>Contact us</a></li>
      <hr />
     </ul>
     <li className='mobile-menu-icons' onClick={()=>setIsMobile(!isMobile)}>{isMobile ?    <FontAwesomeIcon icon={faTimes} />:<FontAwesomeIcon icon={faBars} />}</li>
   </nav>
   <div>

   </div>
 </div>
  )
}

export default NavBar
