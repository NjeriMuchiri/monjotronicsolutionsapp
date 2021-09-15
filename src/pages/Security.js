import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog,faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import camera from "../images/ipcamera.jpg";
import cctv from "../images/cctv1.jpg";
import MainFooter from '../components/mainfooter';
import office from '../images/officeaccess.jpeg';
import biometric from '../images/biometricsolutions.jpg';
import door from '../images/magneticlock.jpg';
import fence from '../images/electricFence.jpg';
import videodoor from '../images/videodoor.jpg';
import panel from '../images/offgridsolar.jpg';
import '../App.css';


export const Security = () =>{
    return(
        <>
        <div>
            <h2>We offer security services</h2>
        </div>
        </>
    );
};

export const Cctv = () =>{
    return(
        <>
       <section className="cctv">
      <div className="cctv-container">
          <h1 className="cctv-title">CCTV-Surveillance</h1>
          <div className="cctv-content">
              <p>At Monjotronic Solutions,we offer a complete range of Surveillance solutions<br/>
                  from leading manufucturers including DVR systems,a wide range of Cameras<br/>
                  such as IP cameras,HD cameras,Dome cameras,PTZ cameras,bullet cameras<br /> and the requisite 
                  end to end installation services.
              </p>
              <div class="photo-section">
                  <img src={camera} alt="cctvcamera" /> 
              </div>
              <div class="cctv-bottom">
                  <p>
                      Qualified Technicians are available and well positioned to advice<br/>
                      on identifying suitable hardware based on the requirements <br/>and 
                      oversee proper installation to achieve quality images <br/> and correct backup options.
                  </p>
                  <div class="photo-section">
                  <img src={cctv} alt="cctvfootage" />
              </div>
                </div>
          </div>

      </div>
    </section>
    <MainFooter/>
        </>
    );
};

export const AccessControl = () =>{
    return(
        <>
         <div className="Access-Control-container">
        <h1 className="Access-control-title">Access-Control< FontAwesomeIcon className="icon" icon={faUserCog}/></h1>

    <div className="Access-content">
        <h5>We as Monjotronic Solutions offer the services below in Access Control;</h5>
        <div className="Access-control-services">
                <h2>Access Control</h2>
            <ul>
                <li> -Magnetic door locks</li>
                <li> -Office Access Control</li>
                <li> -Stand Alones</li>
            </ul>
            <h2>IP intercoms</h2>
            <ul>
                <li> -Apartment Video Phone</li>
            </ul>
            <h5>Biometric Solutions</h5>
            <ul>
                <li> -Time Attendance</li>
            </ul>
            <h2>CCTV Surveillance</h2>
            <ul>
                <li> -IP CCTV</li>
                <li> -HD CCTV</li>
            </ul>
        </div>
    <div className="image-group padding-right animate-left">
        <img src={videodoor} alt="a video door" width="20%" height="40%"/>
        <img src={door} alt="magnetic lockdoor" width="20%" height="40%"/>
        <img src={biometric} alt="biometric system" width="20%" height="40%"/>
        <img src={office} alt="officeaccess system" width="20%" height="40%"/>

        </div>
    </div>
    </div>
          <MainFooter/>
        </>
    );
};

export const ElectricFence = () =>{
    return(
        <>
         <section class="Electric-Fence">
    <div class="ElectricFence-Container">

    <h1 class="Fence-title">ElectricFence Installation</h1>
    <div class="Fence-content">
        <h4> Installation of electric fence for security purposes.</h4>
        <div class="photo-group">
            <img src={fence} alt="electric fence sample" width="30%" height="50%" />
        </div>
        <p>
            We as Monjotronic Solutions install electric fences inorder to defeat insecurity at homes<br />
            or working places and promote safety environments. Installation is at an affordable price <br/>
            and we come bearing the equipments needed to install the electric fence.<br />
            We charge both for cost of labour and the equipments used.<br />We have qualified technicians to satistfy<br />
            the needs you want as a client.<br />
            We also do electric fence maintenance if at all its needed and keep the electric fence in a good state.<br />
            Happy and qualified technicians ready to serve you at your needs.
        </p>
        <div class="button">
            <a href="/contactus">< FontAwesomeIcon className="icon" icon={faPhoneSquare}/>&nbsp;Contact Us</a>
            </div>
</div>
    </div>
    </section>
    <MainFooter />
        </>
    );
};

export const CleanPowerInstallation = () =>{
    return(
        <>
       <section className="cleanpower">
        <div className="cleanpower-container">
            <h1 className="cleanpower-title">CleanPower Installation</h1>
            <div className="cleanpower-content">
                <div className="section-image">
                <img src={panel} alt="solarpanels" />
                </div>
            <p>Solar energy is a source of clean renewable source of energy. <br />Solar panels convert sunlight into electric energy.<br />
               We connect the solar panels directly to a power inverter<br /> and then connect it to a home grid <br/> or connect the inverter to the battery <br />
               and then to the home power grid.<br />The power inverter then converts the solar energy <br /> into energy that is consumable at home.<br /> Power inverters 
               are crucial for safe and efficient operation of solar panels.<br />We encourage solar panels installation,<br />since solar energy can act as a backup,<br /> so you don't 
               have to worry about power outage.<br />Maintenance being the key to sustaining a strong,<br />properly functioning,efficient and effective structure.<br />
               After installation,we schedule maintenance actions<br /> aimed at prevention of breakdown and failure of the solar panels.<br />Since insufficient care of solar panels
               <br />can reduce the amount of energy generated by the panels.<br />The most vital component of solar panel care<br />is to keep the panels clean since a solar panel<br />
               need to absorb energy from the sun.<br /> Our goal is to prevent the failure of the panels <br />
               caused by dust and other external particles before it actually occurs.<br /></p>
            </div>
       
        </div>
    </section>
    <MainFooter />
        </>
    );
};