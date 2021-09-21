import React from 'react';
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWifi, faCircleNotch,faSpinner} from '@fortawesome/free-solid-svg-icons';
import MainFooter from '../components/mainfooter';
import netpackage from '../images/netpackage.jpg';

export const Networking=()=>{
      return(
            <h4>Offering networking services</h4>
      )
}
export const LanWlan=()=>{
      return(
           <>
           <header className="wlan-div">
               <div className="wlan-banner">
                     <h3 className="wlan-title">Internet 
                     Services.</h3>
                     <h5 className="wlan-about">
                           offering great internet services with an unrestricted movement within the coverage area.
                     </h5>
               </div>
           </header>
       <section className="wlan">
             <div className="wlan-section clearfix">
                   <article className="wlan-info">
                         <div className="wlan-subtitle">
                       <h3 className="wlan-textheading">
                             WirelessLan.
                       </h3>
                        </div>
                       <p className="wlan-text">
                   Here,we are well skilled and equipped enough  to plan,implement,maintain,support and troubleshoot end to end Local
                    Area Network infrastructure.
                    We use a UTP(Unshielded Twisted Pair)CAT-6 which has a high performance
                    when it comes to indoor Networking hence minimal latency.
                    </p>
                    <p className="wlan-text"> 
                    Our WLANs are modern and are based on the latest protocol standards of IEEE:802.11
                     with WPA2|aes ccm encryption for a safe and secure connection.
                    Wireless LANs are popular for use in home and in commercial entities
                    due to their ease of installation and user friendly.
                       </p>
                   </article>
               <article className="wlan-services clearfix">
                     <div className="about">
                            <h3 className="wlan-textheading">
                             Our Services:
                       </h3>
            <ul className="about-us">
                    <li><span>< FontAwesomeIcon className="icon" icon={faWifi}/> Fast and reliable Internet Service Provider.</span></li>
                    <li><span>< FontAwesomeIcon className="icon" icon={faCircleNotch}/> We have qualified technicians on networking, configurations and network analysation.</span></li>
                    <li><span>< FontAwesomeIcon className="icon" icon={faSpinner}/> We advice on quality equipment installation.</span></li>
                    <li><span>< FontAwesomeIcon className="icon" icon={faCircleNotch}/> Available online and in-situ Troubleshooting services.</span></li> 
                    </ul>
                    
                     </div>
                     <div className="net-package lan-image-container">
                        <h3 className="wlan-textheading">
                           Our Internet Package:
                       </h3>
                        <img src={netpackage} alt="our internet packages"className="lan-image" />
                     </div>

               </article>
             </div>
             </section>



        <MainFooter/>
        </>
      );
};
export const StructuredCabling=()=>{
        return(
              <>
               <section className="cabling">
        <div className="cabling_container">
        <div className="cabling_content">
                    <h5 className="cabling_subheading">Structured Cabling</h5>
            <div className="photo_section">
            </div>
            <p>This is a campus or building, cabling infrastructure that consists of a number<br />
              of elements hence structured,that include twisted pair and optical cabling,<br />
              patch panels and patch cables.<br />Structured cabling can better support a business's<br />
              needs on a daily basis,from telecommunications to security and even HVAC systems.<br />
              These are six different subsystems that make up structured cabling,and each subsystem<br />
              works as a puzzle piece to make the entire system reliable for your network connection.<br />
              At Monjotronic Solutions,we install a cabling system in compliance with<br />
              TIA/EIA-568 standards that will <b>support</b><br />
              multiple hardware uses and be suitable for today's needs and those of the <i>future.</i><br/>
              Structured cabling neatly organizes all of your cables into a system that can grow with your needs.<br />
              We do encourage a correctly installed system for current and future requirements<br />
              which will be met,that whenever a new hardware is added in the future it will be<br />
              supported,for it's <span>versatile,flexible and efficient.</span> </p>
        </div>
         </div>
    </section>
             
             <MainFooter/>
              </>
        )
}

    

