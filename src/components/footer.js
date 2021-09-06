import React from 'react';
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,
 faPhone,
 faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
 import {faFacebookSquare,
  faWhatsappSquare,faInstagramSquare,faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function FooterSection(){
    return(
      <footer className="footer-footer">
           <div className="footer-container">
             <div className="section aboutus">
                 <h2 className="footer-header"><span>Monjotronic</span>Solutions</h2>
                 <p><span>Services:</span>Service | Maintenance of ICT equipments.</p>
                 <p><span>ICT:</span>LAN Infrastructure | Structured cabling. </p>  
                 <p><span>Security:</span>CCTV | AccessControl | ElectricFence <br />and CleanPowerInstallation.</p>
                 <h2>< FontAwesomeIcon icon={faPhone}/> &nbsp;Phone:</h2>
                 <p><Link to="tel:+254702452556">0702452556.</Link><br /><Link to="tel:+254734139465">0734139465.</Link></p>
                 <h2>< FontAwesomeIcon icon={faEnvelope}/> &nbsp;Gmail:</h2>
                 <p><Link to="mailto:monjotronic@gmail.com">monjotronic@gmail.com</Link></p>
                 <br />
                 <p><Link to="mailto:monjotronic@outlook.com">monjotronic@outlook.com</Link></p>
                 <h2>< FontAwesomeIcon icon={faMapMarkedAlt}/> &nbsp;Address:</h2>
                 <p>Nairobi hardware complex | Suite No.06, Wangige.</p>
    
                 <ul className="social-icons">
                    <li><Link to="https://www.facebook.com/search/top/?q=monjotronic%20solutions">
                      <FontAwesomeIcon icon={faFacebookSquare}/> &nbsp; </Link></li>
                    <li><Link to="https://www.instagram.com/monjotronics/">< FontAwesomeIcon icon={faInstagramSquare}/> &nbsp;</Link></li>
                    <li><Link to="https://wa.me/254734139465">< FontAwesomeIcon icon={faWhatsappSquare}/> &nbsp;</Link></li>
                    <li><Link to="">< FontAwesomeIcon icon={faTwitterSquare}/> &nbsp;</Link></li>
             </ul>
             </div>
             <div class="section quicklinks">
                 <h2>Our <span>Products</span></h2>
                 <ul>
                  <li><a href="preventive.html">Maintenance.</a></li>
                  <li><a href="CCTV.html">Security.</a></li>
                  <li><a href="service.html">Service.</a></li>
                  <li><a href="lan.html">Infrastructure.</a></li>
                  <li><a href="aboutus.html">AboutUs.</a></li>screen
                  <li><a href="contactus.html">Contact.</a></li>
    
                 </ul>
             </div>
             <div className="section quotation" >
                <h2>Get a <span>Quotation!</span></h2>
                <br />
                <div id = "error"></div>screen
                < id className= "form" action="#" method="POST" />
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
              <input type="phonenumber" name="phonenumber" id ="phonenumber" class="text_input" required placeholder="PhoneNumber">
              <br >
              <textarea name="message" id="message" class="text_input" required placeholder="Your Message..."></textarea>
              <br />
              <input type="submit" class="contact-in-btn" value="submit" />
             </div>
           </div>
             <div class="copyrightText">
             <p>Copyright &#169; Monjotronic Solutions.</p>
             </div> `
    </div>
      </footer>
    );
};

export default FooterSection;