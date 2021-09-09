import React, {Component}from 'react'
import '../App.css';

const initialState={
             email:'',
             phonenumber:'',
             message:'',
             description:'preventivemaintenance',
             emailError:'',
             phonenumberError:'',
             messageError:''
};

export class Form extends Component{
    constructor(props) {
        super(props)
    
        this.state=initialState;
    }
    handleEmailChange = event =>{
        this.setState({
            email:event.target.value
        })
    }
     handlePhoneNumberChange = event =>{
        this.setState({
            phonenumber:event.target.value
        })
    }
    handleMessageChange = event =>{
        this.setState({
            message:event.target.value
        })
    }
    handleDescriptionChange = event =>{
        this.setState({
            description:event.target.value
        })
    }

    validate = () =>{

             let emailError='';
            let phonenumberError='';
             let messageError='';

        if(!this.state.message){
            messageError = "message cannot be blank";
        }
        if(!this.state.phonenumber >= 15){
            phonenumberError = "invalid phone number";
        }

        if(!this.state.email.includes("@")){
            emailError="invalid email";
        }
        if(emailError || messageError || phonenumberError){
            this.setState({emailError,messageError,phonenumberError});
            return false;
        }
        return true;
    };

    handleSubmit = event =>{
        event.preventDefault();

        const isValid=this.validate();
        if (isValid){
        alert(`${this.state.email},${this.state.phonenumber},${this.state.message},${this.state.description}`);

           //clear form
           this.setState(initialState);
        }

    };
    
    render(){
        const{email,phonenumber,message,description} = this.state
        return(
            <form>
                 <div className="section quotation">
                     <h4>Get a Quotation.</h4>
                    <label>Description:</label>
                    <select value={description} onChange={this.handleDescriptionChange} className="selected">
                     <option value="Maintenance">PreventiveMaintenance</option>
                      <option value="Service">Service</option>
                      <option value="Networking">LAN/WLANInfrastructure</option>
                      <option value="Security">CCTV installation</option>
                      <option value="Security">ElectricFenceInstallation</option>
                      <option value="Cabling">StructuredCabling</option>
                      <option value="Access">AccessControl</option>
                      <option value="PowerInstallation">CleanPowerInstallation</option>
                      <option value="Equipment">ICTEquipment</option>
                      <option value="Repair">ComputerRepair</option>
                      <option value="Repair">ComputerAccesories</option>
                    </select>

                    <br/>
                    <input type="email"
                     value={email}
                     placeholder="Your Email..."
                     onChange={this.handleEmailChange}
                     className="text_input"/>

                     <div style={{fontSize:12,color:'red'}}>{this.state.emailError}
                     </div>

                    <br />
                    <input type="phonenumber"
                     value={phonenumber}
                     placeholder="Phonenumber"
                     onChange={this.handlePhoneNumberChange}
                     className="text_input"/>

                     <div style={{fontSize:12,color:'red'}}>{this.state.phonenumberError}
                     </div>

                <br/>
                    <textarea 
                    value={message}
                    placeholder="Leave a Message..."
                    onChange={this.handleMessageChange}
                    className="text_input"/>

                    <div style={{fontSize:12,color:'red'}}>{this.state.messageError}
                     </div>

                
                <button type="submit" className="contact-in-btn" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
};

export default Form;