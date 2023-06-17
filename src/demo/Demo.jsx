import React from 'react'
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInvesting, faCode } from '@fortawesome/free-solid-svg-icons';
function Services() {
  return (
    <div className='container' >
   <div className="row" >
    <div className="col-lg-5">
       <div id='import'>
       <h1 className="fac" style={{color:"#369C8F",fontSize:"60px",marginLeft:"100px"}}><FontAwesomeIcon icon={faCode} /></h1>
       </div>
      <h1 style={{color: "#369C8F",fontSize:"45px",width:"300px",marginLeft:"100px"}}>Our Project PortFolio</h1>
    </div>
      <div className="col-lg-7" id='design-section'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Digital Marketing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/2.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Digital Strategy</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/dt.jpg"
          alt="Slide 4"
        />
        <Carousel.Caption>
          <h3>Digital Transformation</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/ui.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Ui (Ux) UserExperince</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='services'>
     <h3 style={{color: "#369C8F",marginLeft:"190px"}}>Our Services</h3>
    </div>
      </div>
      </div>      
    </div>
  )
}

export default Services
