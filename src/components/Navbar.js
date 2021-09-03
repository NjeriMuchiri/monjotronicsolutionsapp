import React from 'react';
import '../App.css';
import logo from "../images/logo.png"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faHome} from '@fortawesome/free-solid-svg-icons';


const Navbar = ()=>{
     return(
         <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
  <a href= "/" className="nav-logo"><img src = {logo} alt="logo" style={{width:"160px"}}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a href="/" className="nav-link" > < FontAwesomeIcon icon={faHome}/> &nbsp;Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/Networking" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Networking
        </a>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/Networking/lanwlan">LanWlan</a>
          <a className="dropdown-item" href="/Networking/structuredcabling">StructuredCabling</a>
        </div>
      </li>
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/Security" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Security
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/Security/cctv">Cctv</a>
          <a className="dropdown-item" href="/Security/Accesscontrol">AccessControl</a>
          <a className="dropdown-item" href="/Security/electricfence">ElectricFence</a>
          <a className="dropdown-item" href="/Security/cleanpowerinstallation">CleanPowerInstallation</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/ServiceandMaintenance" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ServiceandMaintenance
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/ServiceandMaintenance/Ictequipment">ICTEquipment</a>
          <a className="dropdown-item" href="/ServiceandMaintenance/Preventivemaintenance">PreventiveMaintenance</a>
           <a className="dropdown-item" href="/ServiceandMaintenance/service">Service</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/aboutus">AboutUs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contactus"><FontAwesomeIcon icon={faAddressBook}/>&nbsp;ContactUs</a>
      </li>
    </ul>
  </div>
</nav>
        </>
     );

};



export default Navbar;