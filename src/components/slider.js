import React from 'react';
import {Carousel }  from 'react-bootstrap';
import cabling from '../images/cabling.jpg';
import ethernet from '../images/ethernet.jpg'
import maintenance from '../images/computermaintenance.jpg';
import servicing from '../images/servicing.jpg';
import fence from '../images/electricFence.jpg';
import computer from '../images/comprepair.jpeg'
import biometric from '../images/biometricsolutions.jpg'
import '../App.css';


function SLiderCarousel(){

    return(
        <Carousel fade>
  <Carousel.Item>
    <img
      src={cabling}
      className="d-block w-100"
      alt="Cables that are structured"
    />
    <Carousel.Caption>
      <h3>Structured Cabling.</h3>
      <p>Management and cables organization.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      src={ethernet}
      className="d-block w-100"
      alt="ethernet cables"
    />
    <Carousel.Caption>
      <h3>Wi-Fi Installation.</h3>
      <p>We offer great internet services.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={maintenance}
      alt="Computer maintenance"
    />

    <Carousel.Caption>
      <h3>Computer Maintenace.</h3>
      <p>Offering the best computer maintenance services.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={biometric}
      alt="machine of biometric system"
    />

    <Carousel.Caption>
      <h3>Biometric Solutions.</h3>
      <p>Installation and maintenance of biometric systems.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={computer}
      alt="Computer being repaired"
    />

    <Carousel.Caption>
      <h3>Computer Repair.</h3>
      <p>Fixing and repairing services for computers available.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fence}
      alt="electric fence"
    />

    <Carousel.Caption>
      <h3>Electric Fence.</h3>
      <p>Installation and maintenance of electric fences.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={servicing}
      alt="Ict equipments service"
    />

    <Carousel.Caption>
      <h3>Computer and Ict Equipment service.</h3>
      <p>Servicing by our own able team is available.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
};

export default SLiderCarousel;