import  React from 'react';
import MainFooter from '../components/mainfooter';
import MidContainer from '../components/midcontainer';
import '../App.css';
import servicing from '../images/servicing.jpg';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWrench,
    faToolbox,faMapMarked,faSpinner, faCogs, faSmile, faCalendarCheck, faComments, faClock, faHandSparkles} from '@fortawesome/free-solid-svg-icons';

export const Serviceandmaintenance = () =>{
    return(
        <>
        <div>
            <h2>We offer services</h2>
        </div>
        </>
    );
};

export const ICTEquipment = () =>{
    return(
        <>
        <header className="main-div">
            <div className="banner">
                <h3 className="ict-subtitle">Unlimited supply of</h3>
                <h2 className="ict-title">Computer Accessories.</h2>
            </div>
        </header>
          <MidContainer />
        <div className="ict-container">
         <section className="icts clearfix">
           <article className="ict">
           <span className="ict-icon">
              <FontAwesomeIcon icon={faToolbox}/> 
              </span>
              <h3 className="icticon-title">Repair</h3>
              <p className="ict-text">
                  This is done by technicians on board who are sufficiently familiar with the equipment and take all the responsible measures to ensure
                  integrity of the equipment.
              </p>
           </article>
           <article className="ict">
            <span className="ict-icon">
            <FontAwesomeIcon icon={faMapMarked}/>
            </span>
          <h3 className="icticon-title">Supply</h3>
          <p className="ict-text">
              Visit our shop and get
              unlimited supply of any Ictequipment
              that you might need,
              at a very affordable price.
          </p>
           </article>
           <article className="ict">
            <span className="ict-icon">
            <FontAwesomeIcon icon={faSpinner}/>
            </span>
          <h3 className="icticon-title">Installation</h3>
          <p className="ict-text">
              Installation Services by our own able installation team of the equipment
              that needs installation.
          </p>
           </article>
           <article className="ict">
            <span className="ict-icon">
            <FontAwesomeIcon icon={faCogs}/>
            </span>
          <h3 className="icticon-title">Support | Maintenance</h3>
          <p className="ict-text">
              Provision of support, by the support technicians for the deployment and Maintenance
              of equipment that involves taking various steps 
              that lead to better equipment performance.
          </p>
           </article>
         </section>
<MainFooter/>
        </div>
        </>
    );
};

export const PreventiveMaintenance = () =>{
    return(
        <>
       <header className="main-section">
           <div className="prev-banner">
             <h3 className="prev-title">PreventiveMaintenance</h3>
             <span className="prev-icon">
                 <FontAwesomeIcon icon={faCogs}/>
             </span>
             <a href="/contactus" class="banner-btn">Call Us</a>
           </div>
           </header>
           <div className="mid-section">
               <section className="maintenance clearfix">
             <article className="maintenance-section">
                 <span className="maintenance-icon">
                     <FontAwesomeIcon icon={faCalendarCheck}/>
                      </span>
                <h3 className="icon-title">Regular and Routine</h3>
                <p className="maintenance-about">
                  This is conducted on equipments
                  in order to keep them running and
                  prevent downtime from unexpected
                  equipment failure.
                </p>
             </article>
             <article className="maintenance-section">
                 <span className="maintenance-icon">
                     <FontAwesomeIcon icon={faClock}/>
                      </span>
                <h3 className="icon-title">Schedules</h3>
                <p className="maintenance-about">
                 We schedule regular maintenance
                 actions aimed at prevention of 
                 breakdowns and failures, with the 
                 goal of preventing failure of the 
                 equipment caused by dust and other
                 external causes,before it occurs.
                </p>
             </article>
             <article className="maintenance-section">
                 <span className="maintenance-icon">
                     <FontAwesomeIcon icon={faSmile}/>
                      </span>
                <h3 className="icon-title">Benefits</h3>
                <p className="maintenance-about">
                  It is designed to preserve and 
                  enhance equipment reliability 
                  which include equipment check,
                  partial or complete overhaul
                  at specific periods,lubrication
                  for moving parts like CPU and system fans.
                  </p>
             </article>
             <article className="maintenance-section">
                 <span className="maintenance-icon">
                     <FontAwesomeIcon icon={faHandSparkles}/>
                      </span>
                <h3 className="icon-title">Systematic Inspection</h3>
                <p className="maintenance-about">
                  This is cleaning and replacement of
                  worn-out parts,materials and systems faults
                  in-order to keep both the hardware
                  and the software in a good working condition
                  for a great user experience with the maintained equipment.
                </p>
             </article>
             <article className="maintenance-section">
                 <span className="maintenance-icon">
                     <FontAwesomeIcon icon={faComments}/>
                      </span>
                <h3 className="icon-title">Our FeedBack</h3>
                <p className="maintenance-about">
                   We believe that preventive maintenance can be the key to keeping the computer system 
                   from experiencing serious problems such as 
                   dataloss and hardware failures and 
                   aids the system functionality for 
                   a long period of time.We offer editable
                   maintenance services for both electrical and mechanical equipment and systems.
                </p>
             </article>
             </section>
             <MainFooter/>
           </div>
        </>
    );
};

export const Service = () =>{
    return(
        <>
        <div class = "service-container">
     <h2 class="service-title">Service < FontAwesomeIcon className="icon" icon={faWrench}/>
     </h2>
     <div class="image_part">
         <img src={servicing} alt="key illustrating service" />
     </div>
     <p class="about-servicing">
         This is a series of measures and procedures<br />that is done in order to examine<br />
         an equipment and repair the damaged parts.<br />Servicing is done on all equipment,whether<br />
         in current operation or for use after storage.<br />For an equipment to stay in good working
         condition,<br />we encourage regular servicing done, by our able technicians.<br />
         It is done to ensure required operation efficiency of an equipment.<br />We have
         a properly organized servicing,<br/>that lowers operating costs as a result of
         reductions<br />in the possibilities of a breakdown,expensive unplanned repairs,<br />
         and the cost of planned repairs.<br />This in turn increases the service life of an equipment.
     </p>

    </div>
        <MainFooter/>
        </>
    );
};