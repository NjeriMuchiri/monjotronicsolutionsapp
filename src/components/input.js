import React from 'react';
import {useState} from 'react';
import '../App.css';

const ControlledInputs = () =>{
    const[fullName,setFullName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const[people,setPeople]=useState('[]');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fullName && email && message){
           const person = {id:new Date().getTime().toString(),fullName,email,message}
           console.log(person);
           setPeople((people)=>{
               return[...people,person]
           });
           setFullName('');
           setEmail('');
           setMessage('');

           console.log('submit the form')
        }else{
            console.log('empty value')
        }
    };

    return(
       <>
       <article><label htmlFor="">Email:</label>
          <form className="form" onSubmit={handleSubmit}>
              <div className="form-control">
                  <label htmlFor="">Name : </label>
                  <input 
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
              </div>
          <div className="form-control">
              <label htmlFor="">Email:</label>
              <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} 
              />
          </div>
          <div className="form-control">
              <textarea
              name="message"
              id="message"
              placeholder="Your Message..."
              value={message}
              onChange={(e)=> setMessage(e.target.value)} 
              />
          </div>
          <button type="submit">Submit</button>
              </form>
              {
                  people.map((person)=>{
                      const {id,fullName,email,message} = person
                      return<div className = "item" key={id}>
                          <h4>{fullName}</h4>
                          <p>{email}</p>
                          <p>{message}</p>
                      </div>
                  })
              }

       </article>
       </>

    );

};

export default ControlledInputs;