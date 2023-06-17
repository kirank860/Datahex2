import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight,faSpinner } from '@fortawesome/free-solid-svg-icons';

import "./Metho.css"
function Metho() {
  return (
    <div className='container' id='metho-section'>
       <div className="row">
        <div className="col-lg-6 col-md-12">
         <div className="methotitle">
         
         <h1>
         <span style={{fontSize:"50px",color: "#369C8F",marginLeft:"1px"}}><FontAwesomeIcon icon={faSpinner} /></span>
         Our Methodology
          </h1>
         </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="methoimg1">
                    <img src="https://datahex.in/wp-content/uploads/2023/03/business-mission-5642382-4706898.webp" alt="" />
                </div>
                <div className="ourv">
             <h1>Our Vision</h1>
             </div>
             <div className="ourpara">
                <p>Our vision at DataHex is to be a leading digital solutions company that empowers businesses to achieve their full potential by leveraging the latest technologies and innovative digital strategies.</p>
             </div>
            </div>


        <div className="col-lg-6 col-md-12">
                <div className="methoimg2">
                    <img src="https://datahex.in/wp-content/uploads/2023/03/mission-goals-4252954-3526675.webp" alt="" />
                </div>
                <div className="ourm">
             <h1>Our Mission</h1>
             </div>
             <div className="ourmpara">
                <p>At DataHex, our mission is to provide tailored digital transformation and consultancy services, guiding businesses through the dynamic digital realm with innovative, client-centric solutions.</p>
             </div>
            </div>

        </div>
       </div>
       <div className="scrollsubs">
        <p>Scroll To Subscribe</p>
        <div className="down-key-3">
          <a href="#please-contact" className="down">
            <FontAwesomeIcon icon={faChevronDown} className="chevd"/>
          </a>
        </div>
       </div>
       
  
     <hr className='line' />  
   
    <div className='form-side' id='please-contact'>
     <div>
      <h2>Subscribe to our newsletter to stay in touch with the latest</h2>
      </div>
      <input type="email"  placeholder='write your email'/>
      <FontAwesomeIcon icon={faChevronRight}  className="rightchev"/>
      <hr  className='second-hr'/>
    </div>
    </div>
  )
}

export default Metho
