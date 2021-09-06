import React from 'react';
import '../App.css';
import dahua from '../images/dahua.png';
import hp from '../images/HP.jpg';
import dell from '../images/dell.png';
import microtik from '../images/microtik.jpg';
import netis from '../images/netis.png';
import ubiquiti from '../images/ubiquiti.jpg';
import tronic from '../images/tronic.jpg';
import microsoft from '../images/microsoft.png';
import zkteco from '../images/ZKTeco.png';


function MidContainer(){
    return(
        <>
           <div className="section-logo">
         <h3 className="logo-header">We Partner with:</h3>
      
       <div className="logo-container">
         <img src={dahua} alt="dahua brand logo" height="100" width="150"/>
         <img src={hp} alt="Hp brand logo" height="100" width="150" />
         <img src={dell} alt="dell brand logo" height="100" width="150" />
         <img src={microtik} alt="microtick brand logo" height="100" width="150"/>
         <img src={netis} alt="netis brand logo" height="100" width="150"/>
         <img src={ubiquiti} alt="ubiquiti brand logo" height="100" width="150"/>
         <img src={tronic} alt="tronic brand logo" height="100" width="150"/>
         <img src={microsoft} alt="microsoft brand logo" height="100" width="150"/>
         <img src={zkteco} alt="ZKTeco brand logo" height="100" width="150"/>
       </div>
          </div>

        </>

    );
};

export default MidContainer;