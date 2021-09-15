import  React from 'react';
import MainFooter from '../components/mainfooter';
import equipment from '../images/ict.jpg';
import servicing from '../images/servicing.jpg';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneSquare,faCogs} from '@fortawesome/free-solid-svg-icons';
import computer from '../images/computermaintenance.jpg';

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
        <section className="equipment">
        <div className="equipment_container">
            <div className="equipment_content">
                <h1 className="equipment_title">ICT Equipment and accessories</h1>
                <img src={equipment} alt=" ict equipments" />
                <p>We have unlimited<span> supply</span> of any IctEquipment that you might be need of, at a very affordable price.<br />
                   <span>Installation Services</span> by our able installation team, of the equipment that may need installation.<br />
                   <span>ICT Support Technicians</span> who provide support for the deployment and maintenance of IctEquipment<br />
                         and resolutions of technical problems.<br />
                   <span>Repair</span> of damaged ICT equipments by the technicians on board who are sufficiently<br />
                         familiar with the equipment and takes all responsible measures to ensure the integrity <br />
                         of the equipment.
                         The ICT equipments should be serviced and maintained frequently.<br />
                         Here in Monjotronic Solutions we do <a href="/Serviceandmaintenance/service">Service</a> and <a href="/serviceandmaintenance/preventivemaintenance">Maintenance</a> of various <br />
                         ICT equipment which involve taking various steps to achieve great results <br />
                         that lead to better performance.</p>
                </div>
            </div>
    </section>
    <MainFooter/>
        </>
    );
};

export const PreventiveMaintenance = () =>{
    return(
        <>
        <div className = "preventive-container">
            <h1 className="preventive-title">Maintenance</h1>
            <div className="image_section">
                <img src={computer} alt="illustrative cogs of preventive maintenance" />
                
            </div>
            <p className="about-maintenance">
                Regular and routine maintenance of<br /> equipments and assets 
                is conducted in order keep them<br /> running and prevent 
                downtime from unexpected equipment failure.<br />
                We schedule regular maintenance actions aimed at preventions of breakdowns and failures.<br />
                The goal is to prevent the failure of equipment <br /> caused by dust and other external
                particles<br />before it actually occurs.<br />It is designed to preserve and enhance 
                equipment reliability,<br/> which include equipment checks,partial or complete overhauls<br />
                at specific periods, lubrication for moving parts<br /> like CPU and system fans.
                Regular and systematic inspection,cleaning and replacement <br /> of worn parts,materials and systems<br />
                Effective preventive reduces part,material <br /> and system faults and keeps both the <br />
                software and the hardware in goog working condition.<br />We believe that preventive maintenance <br />
                can be the key to keeping the computer system <br/> from experiencing serious problems such as <br />
                data loss and hardware failures and it also<br /> helps the system have a longer life.<br />
                <i>We are providers of editable maintenance <br />for both electrical and mechanical 
                equipments and systems.</i>
            </p>
            <button className ="contactus-button"><a href="/contactus">< FontAwesomeIcon className="icon" icon={faPhoneSquare}/>&nbsp;Get in touch with us</a></button>
    </div>
          <MainFooter/>
        </>
    );
};

export const Service = () =>{
    return(
        <>
        <div class = "service-container">
     <h2 class="service-title">Service < FontAwesomeIcon className="icon" icon={faCogs}/>
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