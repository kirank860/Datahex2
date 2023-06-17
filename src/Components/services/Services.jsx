import React from 'react'
import "./Services.css"
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInvesting, faCode } from '@fortawesome/free-solid-svg-icons';
function Services() {
  return (
    <div>
      <div className="row" id='port'>
        <div className="col-lg-6 col-md-12">
          <div className="portfollio">
            <h1><FontAwesomeIcon icon={faCode} /></h1>
            <h1>Our Project PortFolio</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
        <Carousel className='caro' id='design-section'>
      <Carousel.Item id='projects'>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/digital-marketing-landing-page_52683-3112.jpg?size=626&ext=jpg&ga=GA1.2.1163155684.1680118818&semt=ais"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Digital Marketing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/isometric-marketing-landing-page-template_23-2148223879.jpg?size=626&ext=jpg&ga=GA1.2.1163155684.1680118818&semt=ais"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Digital Strategy</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.1.1163155684.1680118818&semt=sph"
          alt="Slide 4"
        />
        <Carousel.Caption>
          <h3>Digital Transformation</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/isometric-young-woman-creates-custom-design-mobile-application-ui-ux-design_130740-84.jpg?size=626&ext=jpg&ga=GA1.1.1163155684.1680118818&semt=ais"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Ui (Ux) UserExperince</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='domos'>
      <h5>Our Services</h5>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Services
