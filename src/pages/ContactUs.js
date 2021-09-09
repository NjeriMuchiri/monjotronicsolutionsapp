import React from 'react';
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import MainFooter from '../components/mainfooter';
import ContactForm from '../components/contactform';




const ContactUs = () =>{
    return(
        <>
            <div className="contact-wrap">
        <div className="contact-in" >
            <h1>Contact Info:</h1>
            <h2>< FontAwesomeIcon icon={faPhone}/> &nbsp;Phone:</h2>
            <p className="contact-abt"><a href="tel:+254702452556">0702452556.</a>
                <br /> 
                <a href="tel:+254734139465">0734139465.</a>
            </p>
            <h2>< FontAwesomeIcon icon={faEnvelope}/> &nbsp;Email:</h2>
            <p className="contact-abt"><a href="mailto:monjotronic@gmail.com">monjotronic@gmail.com.</a> 
                <br /> 
                <a href="mailto:monjotronic@outlook.com">monjotronic@outlook.com.</a></p>
            <h2>< FontAwesomeIcon icon={faMapMarkedAlt}/> &nbsp;Address:</h2>
            <p className="contact-abt">Nairobi hardware complex,Wangige | Suite No.06</p>
            <ul>
                <li><a href="https://www.facebook.com/search/top/?q=monjotronic%20solutions">
                    <FontAwesomeIcon icon={faFacebook}style={{color:"#000"}}/></a></li>
                <li><a href="https://www.instagram.com/monjotronics/">
                    <FontAwesomeIcon icon={faInstagram}style={{color:"#000"}}/></a></li>
                <li><a href="https://wa.me/254734139465">
                    <FontAwesomeIcon icon={faWhatsapp}style={{color:"#000"}}/></a></li>
            </ul>
        </div>
            <div class="contact-in" >
                <h1>Send a Message</h1>
                     <ContactForm/>
            </div>
            
            <div class="contact-in">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9128965947316!2d36.71091071416816!3d-1.2206614359009649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18a0c2ea253f%3A0x9e1027c07a98c790!2sNairobi%20Hardware%20Enterprises%20(Wangige)!5e0!3m2!1sen!2ske!4v1615141325440!5m2!1sen!2ske" width="100%" height="auto" 
                style={{ border:'0'}} allowfullscreen="" loading="lazy" title="our address" ></iframe>
            </div>
         
        </div>
        <MainFooter/>
        </>
    )
    }
export default ContactUs;

