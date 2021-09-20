import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import camera from "../images/ipcamera.jpeg";
import backup from "../images/backup.jpeg"
import cctv from "../images/cctv1.jpg";
import MainFooter from '../components/mainfooter';
import office from '../images/officeaccess.jpeg';
import biometric from '../images/biometricsolutions.jpg';
import door from '../images/magneticlock.jpg';
import fence from '../images/electricFence.jpg';
import fencing from '../images/fence3.jpeg';
import electric from '../images/electricfence1.jpg';
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
      <section class="cctv">
        <div class="cctv-section clearfix">
         <article className="cctv-info">
             <div className="cctv-title">
                 <h3 className="text-heading">Cctv installation</h3>
                 </div>
                 <p className="cctv-text">
                     At Monjotronic Solutions,we offer complete range of Surveillance solutions
                    from leading manufucturers including DVR systems,a wide range of Cameras
                     such as IP cameras,HD cameras,Dome cameras,PTZ cameras,bullet cameras and the requisite end to end installation services.
                 </p>
                 <p className="cctv-text">
                      Qualified Technicians are available and well positioned to advice
                      on identifying suitable hardware based on the requirements and 
                      oversee proper installation to achieve quality images and correct backup options.
                 </p>
    
         </article>
           <article className="cctv-services clearfix">
             <div class="services">
                 <img src= {camera} alt="cctv camera" class="cctv-img" />
                 <h3 className="cctv-subtitle">CameraRange</h3>
             </div>
             <div class="services">
                 <img src= {cctv} alt="cctv camera" class="cctv-img" />
                 <h3 className="cctv-subtitle">Footage</h3>
             </div>
             <div class="services">
                 <img src= {backup} alt="cctv camera" class="cctv-img" />
                 <h3 className="cctv-subtitle">BackupOptions</h3>
             </div>
           </article>
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
            <h2>Biometric Solutions</h2>
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
         <section className="fence">
             <div className="fence-section clearfix">
               <article className="fence-info">
                   <div className="fence-title">
                <h3 className="fence-heading">electricfence installation.</h3>
                   </div>
                   <p className="fence-text">
                      We as Monjotronic Solutions install electric fences inorder to defeat insecurity at homes or working places and promote safe environments. Installation is at an affordable price
                      and we come bearing the equipments needed to install the electric fence.
                     We charge both for cost of labour and the equipments used.We have qualified technicians to satistfy the needs you want as a client. We also do electric fence maintenance if at all its needed and keep the electric fence in a good state.Happy and qualified technicians ready to serve you at your needs.
                   </p>
               </article>
               <article className="fence-services clearfix">
               <div className="fencing">
                   <img src= {fence} alt="electric wire fence" id="one" className="fence-img" />
                    <img src= {fencing} alt="electric wire fence" id="two" class="fence-img" />
                     <img src= {electric} alt="electric wire fence" id="three" class="fence-img" />
                 
               </div>
               </article>
             </div>

         </section>
    <MainFooter />
        </>
    );
};

export const CleanPowerInstallation = () =>{
    return(
        <>
      
    <MainFooter />
        </>
    );
};