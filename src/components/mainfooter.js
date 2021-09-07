import React from "react";
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const MainFooter=()=>{
    return(
        <>
        <footer>
        <section>
           <div className="footer-container">
             <div className="section aboutus">
                 <h4><span>Monjotronic</span>Solutions</h4>
                 <p><span className="header"> Internet services:<br/> </span>I.S.P | LAN Structured Cabling.</p> 
                 <p><span className="header">Security: <br/></span>CCTV | AccessControl | ElectricFence <br />and SolarCleanPowerInstallation.</p>
                 <p><span className="header">Computer repair and accessories.</span></p>
                 <h4>< FontAwesomeIcon icon={faPhone}/> &nbsp;Phone:</h4>
                 <p><a href="tel:+254702452556">0702452556.</a><br /><a href="tel:+254734139465">0734139465.</a></p>
                 <h4>< FontAwesomeIcon icon={faEnvelope}/> &nbsp;Gmail:</h4>
                 <p><a href="mailto:monjotronic@gmail.com">monjotronic@gmail.com</a>
                 <br /><a href="mailto:monjotronic@outlook.com">monjotronic@outlook.com</a></p>
                 <h4>< FontAwesomeIcon icon={faMapMarkedAlt}/> &nbsp;Address:</h4>
                 <p>Nairobi hardware complex,Wangige | Suite No.6. </p>
    
                 <ul class="social-icons">
                    <li><a href="https://www.facebook.com/search/top/?q=monjotronic%20solutions">
                        <FontAwesomeIcon icon={faFacebook}style={{color:"#fff"}}/></a></li>
                    <li><a href="https://www.instagram.com/monjotronics/">
                        <FontAwesomeIcon icon={faInstagram}style={{color:"#fff"}}/></a></li>
                    <li><a href="https://wa.me/254734139465">
                        <FontAwesomeIcon icon={faWhatsapp}style={{color:"#fff"}}/></a></li>
                    
             </ul>
             </div>
             <div className="section quicklinks">
                 <h4>Our <span>Products</span></h4>
                 <ul>
                  <li><a href="/Serviceandmaintenance/preventivemaintenance">Maintenance.</a></li>
                  <li><a href="/Security/cctv">Security.</a></li>
                  <li><a href="/Serviceandmaintenance/service">Service.</a></li>
                  <li><a href="/Networking/lanwlan">Infrastructure.</a></li>
                  <li><a href="/aboutus">AboutUs.</a></li>
                  <li><a href="/contactus">Contact.</a></li>
    
                 </ul>
             </div>
             <div className="section quotation">
                <h4>Get a <span>Quotation!</span></h4>
                <br />
                <form id = "form">
                    <label for = "quotation">Description:</label>
                    <select id="quotation" name="get a quotation">
                      <option value="Maintenance">PreventiveMaintenance</option>
                      <option value="Service">Service</option>
                      <option value="Networking">WLAN | LAN Infrastructure</option>
                      <option value="Security">CCTV installation</option>
                      <option value="Security">ElectricFenceInstallation</option>
                      <option value="Cabling">StructuredCabling</option>
                      <option value="Access">AccessControl</option>
                      <option value="PowerInstallation">CleanPowerInstallation</option>
                      <option value="Equipment">ICTEquipment</option>
                      <option value="Repair">ComputerRepair</option>
                      <option value="ComputerMaintenance">ComputerMaintenance</option>
                      </select>
                    <br />
               <input type="email" name="email" id = "email" class="text_input" required placeholder="Your Email Adress..." />
               <br />
              <input type="phonenumber" name="phonenumber" id ="phonenumber" class="text_input" required placeholder="PhoneNumber" />
              <br />
              <textarea name="message" id="message" class="text_input" required placeholder="Your Message..."></textarea>
              <br />
              <input type="submit" class="contact-in-btn" value="submit"/>
          </form>
                

             </div>
           </div>
        </section>
           </footer>
    
             <div className="copyrightText">
             <p>Copyright &#169; Monjotronic Solutions.</p>
             </div> 
             </>
       
    )
}
export default MainFooter;