import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function About() {
  return (
 <div className='container' id='about-section'>
   <div className="row">
     <div className="col-lg-6 col-12">
      <div>
        <img className='logo1' src="https://datahex.in/wp-content/uploads/2023/03/istockphoto-1306195988-612x612-1.jpg" alt=""  id='nav-section'/>
      </div>
      <div className='ss-icons'>
        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
        <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        <a href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
        <a href=""> <FontAwesomeIcon icon={faTwitter} /></a>
      </div>
     </div>
     <div className="col-lg-6 col-12 second">
      <div className='logo2-div'>
       <img src="https://datahex.in/wp-content/uploads/2023/04/DataNex_Logo1-768x85-1-1.png" alt="" />
      </div>
      <div className='titleone'>
        <h1>One-Stop Solution for Digital Transformation and Consultancy</h1>
      </div>
      <div className='scrollone'>
        <p><a style={{textDecoration:"none",color:"black"}} href="#datahex">Scroll Down</a></p>
      </div>
     </div>
    </div> 
 </div>
  )
}

export default About
