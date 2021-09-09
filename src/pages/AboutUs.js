import React from "react";
import ethernet from '../images/ethernet.jpg';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import MainFooter from '../components/mainfooter';

const AboutUs = () =>{
    return(
        <>
        <body>
         <div className="main-container">
         <h1 className="title">About Us:</h1>

         <div id="wrapper">
             <div className="about-content">
                 <h4 id="header-abt">We are here to provide internet services,
                     among other IT related services.
                     </h4>
                     <p id="header-us">Monjotronic Solutions is a company that was established in 2016 due to
                     the rise in need of IT related issues.We have been offering IT services 
                    and now we are offering internet services both at home and working places/offices.
                     </p>
                     <ul>
                         <li><span>< FontAwesomeIcon className="icon" icon={faCircleNotch}/>Monjotronic is a fast and reliable internet service provider.</span></li>
                         <li><span>< FontAwesomeIcon className="icon" icon={faCircleNotch}/>Monjotronic has qualified technicians on networking and cofigurations.</span></li>
                         <li><span>< FontAwesomeIcon className="icon" icon={faCircleNotch}/>Monjotronic has a high frequency of 5 GHZ Ac Radio transmission hence minimal network latency.</span></li>
                         <li><span>< FontAwesomeIcon className="icon" icon={faCircleNotch}/>Unlimited online and in stu client support.</span></li>
                     </ul>
                     <div className="button">
                     <a href="/contactus"> < FontAwesomeIcon icon={faPhone}/> &nbsp;Contact Us</a>
                     </div>
                    
             </div>
             <div className="image-section">
                 <img src= {ethernet} alt="" />
             </div>
         </div>
            </div>  
            </body>  
            <MainFooter/>
          </>
          
    );
   
};
 
export default AboutUs;
