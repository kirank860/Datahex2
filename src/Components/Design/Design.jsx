import React from 'react'
import "./Design.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp,faLaptopCode , } from '@fortawesome/free-solid-svg-icons';
function Design() {
  return (
    <div className='container sectiontwo'>
       <div className="row ">
         <div className='secondtitle'>
            <h1> <FontAwesomeIcon icon={faLaptopCode} /> Inventing The Future of Design</h1>
   
         </div>
        <div className="col-lg-6 col-md-12">
         <div className="designimg">
            <img src="https://datahex.in/wp-content/uploads/2023/03/Illustration-AF-Blog-Illustration-2-1000x700-1.webp" alt="" />
         </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="para" id='datahex'>
                <p>Welcome to DataHex, your one-stop solution for digital transformation and consultancy needs. We are a digital solution company that specializes in helping businesses navigate the complex world of digital technology and thrive in the digital age. Our team of experts brings a wealth of experience and knowledge in digital transformation and consultancy to help businesses of all sizes achieve their goals.</p>
            </div>
            <div className="scrolldown">
             <h6><a href="#to-top"><FontAwesomeIcon icon={faChevronUp}/></a></h6>
            </div>
        </div>
       </div>
       <div className="scrolltwo">
        <p>Scroll to our Projects</p>
        <FontAwesomeIcon icon={faChevronDown} className="fachevrondown"/>
        <div><a href="#projects"><FontAwesomeIcon icon={faChevronDown}className="fachevrondown"  /></a></div>
       </div>
    </div>
  )
}

export default Design
