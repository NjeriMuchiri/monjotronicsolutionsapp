import React, {Component}from 'react'
import '../App.css';

const initialState={
             fullname:'',
             email:'',
             message:'',
             emailError:'',
             fullnameError:'',
             messageError:''
};

export class ContactForm extends Component{
    constructor(props) {
        super(props)
    
        this.state=initialState;
    }
    handleEmailChange = event =>{
        this.setState({
            email:event.target.value
        })
    }
     handleFullNameChange = event =>{
        this.setState({
            fullname:event.target.value
        })
    }
    handleMessageChange = event =>{
        this.setState({
            message:event.target.value
        })
    }
    
    validate = () =>{

             let emailError='';
            let fullnameError='';
             let messageError='';

        if(!this.state.message){
            messageError = "message cannot be blank";
        }
        if(!this.state.fullnameError){
            fullnameError = "name cannot be blank";
        }

        if(!this.state.email.includes("@")){
            emailError="invalid email";
        }
        if(emailError || messageError || fullnameError){
            this.setState({emailError,messageError,fullnameError});
            return false;
        }
        return true;
    };

    handleSubmit = event =>{
        event.preventDefault();

        const isValid=this.validate();
        if (isValid){
        alert(`${this.state.email},${this.state.fullname},${this.state.message}`);

           //clear form
           this.setState(initialState);
        }

    };
    
    render(){
        const{email,fullname,message} = this.state
        return(
            <form>
                   <input type="text"
                     value={fullname}
                     placeholder="fullname"
                     onChange={this.handleFullNameChange}
                     className="contact-in-input"/>

                     <div style={{fontSize:12,color:'red'}}>{this.state.fullnameError}
                     </div>

                    <br/>
                    <input type="email"
                     value={email}
                     placeholder="Your Email..."
                     onChange={this.handleEmailChange}
                     className="contact-in-input"/>

                     <div style={{fontSize:12,color:'red'}}>{this.state.emailError}
                     </div>

                <br/>
                    <textarea 
                    value={message}
                    placeholder="Leave a Message..."
                    onChange={this.handleMessageChange}
                    className="contact-in-textarea"/>

                    <div style={{fontSize:12,color:'red'}}>{this.state.messageError}
                     </div>

                
                <button type="submit" className="contact-in-btn" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
};

export default ContactForm;