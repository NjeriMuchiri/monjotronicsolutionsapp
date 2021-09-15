import React from 'react';
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWifi, faCircleNotch,faSpinner} from '@fortawesome/free-solid-svg-icons';
import lanet from "../images/lanet.jpg";
import MainFooter from '../components/mainfooter';


export const Networking=()=>{
      return(
            <h4>Offering networking services</h4>
      )
}
export const LanWlan=()=>{
      return(
           <>
        <div className="lan-container">
            <div id="lan-title">
                   <h1> WirelessLan</h1>
            </div>
            <div className="lan-content">
                <h4 className="lan-header">We as Monjotronic Solutions offer great <span>Internet Services, 
                </span><br /> with an unrestricted movement within the coverage area.
                </h4>
                <p stye={{color:'color:#181818'}}>
                    Here,we are well skilled and equipped enough<br/>
                    to plan,implement,maintain,support and troubleshoot end to end <br/>Local
                    Area Network infrastructure.<br/>
                    We use a UTP(Unshielded Twisted Pair)CAT-6 which has a high performance <br/>
                    when it comes to indoor Networking hence minimal latency.<br/>
                    Our WLANs are modern and are based on the latest protocol <br/> standards of IEEE:802.11
                     with WPA2|aes ccm encryption<br /> for a safe and secure connection.<br/>
                    Wireless LANs are popular for use in home and in commercial entities<br/>
                    due to their ease of installation and user friendly.
                </p>
                   <ul>
                    <li><span>< FontAwesomeIcon icon={faWifi}/> Fast and reliable Internet Service Provider.</span></li>
                    <li><span>< FontAwesomeIcon icon={faCircleNotch}/> We have qualified technicians on networking, cofigurations and network analysation.</span></li>
                    <li><span>< FontAwesomeIcon icon={faSpinner}/> We advice on quality equipment installation.</span></li>
                    <li><span>< FontAwesomeIcon icon={faCircleNotch}/> Available online and in-situ Troubleshooting services.</span></li> 
                    </ul>
                    </div>

            <div className="image-part">
                <img src={lanet} alt="ethernetcables" />
            </div>

        </div>
        <MainFooter/>
        </>
      );
};
export const StructuredCabling=()=>{
        return(
              <h2>Management of cables available.</h2>
        )
}

    

