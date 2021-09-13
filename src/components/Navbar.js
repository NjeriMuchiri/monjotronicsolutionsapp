import React from 'react';
import {Nav,Navbar,NavDropdown} from "react-bootstrap";
import Container  from "react-bootstrap/Container";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faHome} from '@fortawesome/free-solid-svg-icons';
import logo from "../images/logo.png"
import '../App.css';



const Navigationbar = () =>{
  
   return(
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="/Home"><img src={logo} alt="A company logo"style={{width:"160px"}} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/Home">< FontAwesomeIcon icon={faHome}/> &nbsp;Home</Nav.Link>

           <NavDropdown href="/Networking" title="Networking" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Networking/LanWlan/">LanWlan</NavDropdown.Item>
          <NavDropdown.Item href="/Networking/StructuredCabling">StructuredCabling</NavDropdown.Item>
        </NavDropdown>
         <NavDropdown title="Security" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Security/Cctv">Cctv</NavDropdown.Item>
          <NavDropdown.Item href="/Security/AccessControl">AccessControl</NavDropdown.Item>
          <NavDropdown.Item href="/Security/ElectricFence">ElectricFence</NavDropdown.Item>
          <NavDropdown.Item href="/Security/CleanPowerInstallation">CleanPowerInstallation</NavDropdown.Item>
        </NavDropdown>
         <NavDropdown title="Serviceandmaintenance" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Serviceandmaintenance/ICTequipment">ICTEquipment</NavDropdown.Item>
          <NavDropdown.Item href="/Serviceandmaintenance/PreventiveMaintenance">PreventiveMaintenance</NavDropdown.Item>
          <NavDropdown.Item href="/Serviceandmaintenance/Service">Service</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
        <Nav.Link href="/ContactUs"><FontAwesomeIcon icon={faAddressBook}/>&nbsp;ContactUs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   );
};

export default Navigationbar;